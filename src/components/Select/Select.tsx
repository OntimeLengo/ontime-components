import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { IProps, IState } from '../../libs/interfaces';
import { TFuncClick, TFuncChange, TFuncFocus } from '../../libs/types';
import { Utils } from '../../libs/Utils';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { Tag } from '../Tag';
import { Input } from '../Input';
import { InputErrors, TError } from '../InputErrors';
import { List } from './List';
import { Item } from './Item';

type TMapValue = string | Function;
type TLabelPosition = 'top' | 'left' | 'right';
type TSize = 'large' | 'medium' | 'small' | 'smaller';

interface ISelectProps extends IProps {
  dataSource: Function;
  fetchParams?: any;
  autoFetch?: boolean;
  value?: any;
  multiple?: boolean;
  mapValue?: TMapValue;
  customItemTpl?: Function;

  label?: string;
  labelPosition?: TLabelPosition;
  required?: boolean;

  searchable?: boolean;
  clearable?: boolean;
  size?: TSize;

  id?: string;
  name?: string;
  placeholder?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  tabIndex?: string | number;
  errors?: TError[] | null;

  onClick?: Function;
  onChange?: Function;
  onFocus?: Function;
  onBlur?: Function;
  onClear?: Function;
}

interface ISelectDefProps {
  labelPosition: TLabelPosition;
  size: TSize;
  multiple: boolean;
  clearable: boolean;
  autoFetch: boolean;
}

interface ISelectState extends IState {
  isFocused: boolean;
  value: any;
  isOpen: boolean;
  dataSource: Function;
  data: any[];
  fetching: boolean;
  fetched: boolean;
}

/**
 * Class Select
 */
class Select extends PureComponent<ISelectProps & ISelectDefProps, ISelectState> {

  static defaultProps: ISelectDefProps = {
    labelPosition: 'top',
    size: 'small',
    multiple: false,
    clearable: false,
    autoFetch: false
  };

  static List = List;
  static Item = Item;

  readonly state: ISelectState;

  private _startHeight: number = 0;
  private _domSelect: Element | Text | null = null;
  private _select!: any;

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    const response: Record<string, any> = {};

    if (nextProps.value === prevState.value) {
      response.value = nextProps.value;
    }

    if (nextProps.dataSource === prevState.dataSource) {
      response.dataSource = nextProps.dataSource;
    }

    return Object.keys(response).length ? response : null;
  }

  constructor(props: ISelectProps & ISelectDefProps) {
    super(props);

    this.state = {
      isFocused: false,
      value: this.fixValue(this.props.value),
      isOpen: false,
      dataSource: this.props.dataSource,
      data: [],
      fetching: false,
      fetched: false
    };
  }

  onClickOutside = (e: MouseEvent): void => {
    const el = this._domSelect;

    if ((!el || !el.contains(e.target as any)) && this.state.isOpen) {
      this.hidePopup();
    }
  }

  onChange: TFuncChange = (e: React.ChangeEvent<HTMLElement>): void => {
    this.changeHandler(e);
  }

  onFocus: TFuncFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (!this.state.isFocused) {
      if (this.isActive() && this.props.onFocus) {
        this.props.onFocus(e);
      }
  
      this.setState({ isFocused: true });
    }
  }

  onBlur: TFuncFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (this.isActive() && this.props.onBlur) {
      this.props.onBlur(e);
    }

    this.setState({ isFocused: false });
  }

  onClick: TFuncClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    this.toggle();

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  componentDidMount(): void {
    this.calcHeight();

    if (this.props.autoFetch) {
      this.fetch();
    }

    document.addEventListener('click', this.onClickOutside, true);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.onClickOutside, true);
  }

  getFetchParams(params: any = {}): any {
    return Object.assign({}, this.props.fetchParams, params);
  }

  isMultiple(): boolean {
    return this.props.multiple;
  }

  isActive(): boolean {
    return !this.isDisabled();
  }

  isClearable(): boolean {
    return (!!this.props.clearable && !this.isDisabled());
  }

  isSearchable(): boolean {
    return (!!this.props.searchable && !this.isDisabled());
  }

  isDisabled(): boolean {
    return !!this.props.disabled;
  }

  changeHandler(e?: React.ChangeEvent<HTMLElement>) {
    if (this.isActive() && this.props.onChange) {
      if (e) {
        e.persist();
      }

      this.props.onChange(e);
    }
  }

  clear() {
    this.value = '';

    this.changeHandler();

    if (this.props.onClear) {
      this.props.onClear();
    }
  }

  calcHeight() {
    const searchHeight = 28;

    if (this.isMultiple()) {
      const padding = 2;
      const search = this.isSearchable() ? searchHeight : 0;
      const tags: any = this.refs.tags;
      
      if (!this._startHeight) {
        this._startHeight = this._select.clientHeight;
      }

      if (tags.clientHeight > this._startHeight) {
        this._select.style.height = (tags.clientHeight + padding + search) + 'px';
      } else {
        this._select.style.height = this._startHeight + search + 'px';
      }
    } else {
      if (this.isSearchable()) {
        this._select.style.height = (searchHeight * 2) + 'px';
      }
    }
  }

  fixValue(value: any): any {
    value = value ? value : '';

    if (this.isMultiple()) {
      if (!Array.isArray(value)) {
        value = value ? [value] : [];
      }
    }

    return value;
  }

  get value(): any {
    return this.state.value;
  }

  set value(value: any) {
    this.setState({value: this.fixValue(value)}, () => {
      this.calcHeight();

      if (this.props.onChange) {
        this.props.onChange(this.value);
      }
    });
  }

  addMultiValue(value: any[]): void {
    if (this.value.indexOf(value) < 0) {
      this.value = [...this.value, value];
    }
  }

  removeMultiValue(value: any[]): void {
    if (this.value.indexOf(value) >= 0) {
      this.value = this.value.filter((item: any) => (item !== value));
    }
  }

  async fetch(params = {}): Promise<void> {
    let data: any[];

    this.setState({
      fetching: true,
      fetched: false
    });

    try {
      data = await this.state.dataSource(this.getFetchParams(params));
    } catch (err) {
      console.error(err);

      this.setState({
        fetched: true,
        fetching: false
      });

      return;
    }
    
    this.setState({
      data,
      fetched: true,
      fetching: false
    });
  }

  showPopup(): void {
    if (this.isDisabled()) {
      return;
    }

    this.setState({ isOpen: true });

    if (!this.state.fetched) {
      this.fetch();
    }
  }

  hidePopup(): void {
    this.setState({ isOpen: false });
  }

  toggle(): void {
    this.state.isOpen ? this.hidePopup() : this.showPopup();
  }

  focus(): void {
    setTimeout(() => {
      if (this.refs.input) {
        (this.refs.input as any).focus();
      }
    });
  }

  blur(): void {
    setTimeout(() => {
      if (this.refs.input) {
        (this.refs.input as any).blur();
      }
    });
  }

  renderLabel(): JSX.Element {
    let className: string = '';

    if (this.props.labelPosition === 'top') {
      className = 'ontime-input-label_top';
    }

    return (
      <Label 
        className={ className }
        value={ this.props.label } 
        required={ this.props.required } 
      />
    );
  }

  renderErrors(): JSX.Element | null {
    return this.props.errors ? (<InputErrors value={ this.props.errors } />) : null;
  }

  renderTags(): JSX.Element {
    return (
      <div 
        ref="tags" 
        className={ 'ontime-select-tags' + (this.isSearchable() ? ' searchable': '') }
        onClick={ e => {
          this.focus();

          if (this.onClick) {
            this.onClick(e);
          }
        } }
      >
        {
          this.value.map((value: any, idx: number) => {
            return (
              <Tag 
                key={ idx.toString() }
                value={ value } 
                mapValue={ this.props.mapValue } 
                onClick={ () => this.focus() }
                onClose={ () => {
                  this.focus();
                  this.removeMultiValue(value);
                } }
              />
            );
          })
        }
      </div>
    );
  }

  renderInput(): JSX.Element {
    const { style, className } = this.props;
    const props: Record<string, any> = {
      ref: 'input',
      className: 'ontime-input-input' + (this.isSearchable() ? ' searchable': '')
    };

    const extraCss: Record<string, any> = {
      'is-focused': this.state.isFocused,
      'is-disabled': this.isDisabled(),
      'error': (this.props.errors && this.props.errors.length > 0)
    };

    extraCss[this.props.size] = true;

    if (this.props.hasOwnProperty('tabIndex')) {
      props.tabIndex = this.props.tabIndex;
    }

    props.readOnly = true;
    this.props.id && (props.id = this.props.id);
    this.props.name && (props.name = this.props.name);
    this.props.placeholder && (props.placeholder = this.props.placeholder);
    this.props.autoFocus && (props.autoFocus = this.props.autoFocus);

    props.value = '';
    props.onChange = this.onChange;
    props.onFocus = this.onFocus;
    props.onBlur = this.onBlur;
    props.onClick = this.onClick;

    let value: any = this.value;
  
    if (this.isMultiple()) {
      if (value.length > 0) {
        delete props.placeholder;
      }
    } else {
      if (value) {
        if (this.props.mapValue) {
          if (typeof this.props.mapValue === 'function') {
            props.value = this.props.mapValue(value) || '';
          } else {
            props.value = value[this.props.mapValue] || '';
          }
        } else {
          props.value = value;
        }
      }
    }

    return (
      <div 
        ref={ (c: any) => {
          this._select = c;
          this._domSelect = ReactDOM.findDOMNode(c);
        } }
        className={ Utils.className('ontime-select', className, extraCss) }
        style={ style }
        onKeyDown={ e => {
          if (e && (e.keyCode === 27 || e.keyCode === 9)) {
            this.state.isOpen && this.hidePopup();
          }
        } }
      >
        <div className="ontime-select-left_col">
          { this.isMultiple() ? this.renderTags() : null }
          <input className="ontime-input-input" { ...props } />
          {
            this.isSearchable() && 
            <div className="ontime-input-wrapsearch">
              <Input 
                ref="search"
                className="ontime-input-search" 
                size="smaller"
                leftIcon="search"
                onClick={ (e: React.FocusEvent<HTMLInputElement>) => {
                  if (this.onFocus) {
                    this.onFocus(e);
                  }

                  this.showPopup();
                } }
                onKeyDown={ Utils.debounce((e: any) => this.fetch({search: e.nativeEvent.target.value})) }
                onBlur={ this.onBlur }
              />
            </div>
          }
        </div>
        <div className={ 'ontime-select-right_col' + (this.isClearable() ? ' clearable' : '') }>
          { this.isClearable() && 
            <Icon 
              value="window-close" 
              onClick={ () => {
                this.focus();
                this.value = '';
              } }
            />
          }
          <Icon 
            value={ this.state.isOpen ? 'caret-up' : 'caret-down' }
            onClick={ () => {
              this.focus();
              this.toggle();
            } } 
          />
        </div>
        <List 
          data={ this.state.data }
          value={ this.state.value }
          isOpen={ this.state.isOpen }
          multiple={ this.isMultiple() }
          onClick={ (value: any) => {
            if (this.isMultiple()) {
              (this.value.indexOf(value) >= 0) ? this.removeMultiValue(value) : this.addMultiValue(value);
            } else {
              this.value = value;

              this.hidePopup();
            }

            this.focus();
          } }
          mapValue={ this.props.mapValue }
          customItemTpl={ this.props.customItemTpl }
          fetching={ this.state.fetching }
        />
      </div>
    );
  }

  render(): JSX.Element {
    if (this.props.label) {
      if (this.props.labelPosition === 'top') {
        return (
          <React.Fragment>
            { this.renderLabel() }
            { this.renderInput() }
            { this.renderErrors() }
          </React.Fragment>
        );
      } else if (this.props.labelPosition === 'left') {
        return (
          <div className="ontime-wrapinput">
            <div className="ontime-wrapinput-label">
              { this.renderLabel() }
            </div>
            <div className="ontime-wrapinput-input">
              { this.renderInput() }
              { this.renderErrors() }
            </div>
          </div>
        );
      } else if (this.props.labelPosition === 'right') {
        return (
          <div className="ontime-wrapinput">
            <div className="ontime-wrapinput-input">
              { this.renderInput() }
              { this.renderErrors() }
            </div>
            <div className="ontime-wrapinput-label is-right">
              { this.renderLabel() }
            </div>
          </div>
        );
      } else {
        throw new Error('Input: unknown label position');
      }
    } else {
      return (
        <React.Fragment>
          { this.renderInput() }
          { this.renderErrors() }
        </React.Fragment>
      );
    }
  }

}

export {
  Select,
  ISelectProps,
  ISelectState,
  TLabelPosition,
  TSize
};
