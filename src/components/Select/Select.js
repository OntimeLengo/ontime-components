import React from 'react';
import ReactDOM from 'react-dom';
import { PureComponent, PropTypes, debounce } from '../../libs';
import Icon from '../Icon';
import Label from '../Label';
import Tag from '../Tag';
import Input from '../Input';
import InputErrors from '../InputErrors';
import List from './List';
import Item from './Item';

/**
 * Class Select
 * 
 * @author Dmytro Hotovskyi
 * @created 05/05/2018
 */
export default class Select extends PureComponent {

  static propTypes = {
    dataSource: PropTypes.func.isRequired,
    fetchParams: PropTypes.object,
    autoFetch: PropTypes.bool,
    value: PropTypes.any,
    multiple: PropTypes.bool,
    mapValue: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    customItemTpl: PropTypes.func,
    
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(['top', 'left', 'right']),
    required: PropTypes.bool,
    
    searchable: PropTypes.bool,
    clearable: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'medium', 'small', 'smaller']),
    
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
    disabled: PropTypes.bool,
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    errors: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),

    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onClear: PropTypes.func
  }

  static defaultProps = {
    labelPosition: 'top',
    size: 'small',
    multiple: false,
    clearable: false,
    autoFetch: false
  }

  static List = List

  static Item = Item

  constructor(props) {
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

    this._startHeight = 0;

    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onClickOutside = this.onClickOutside.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.value = nextProps.value;
    }

    if (nextProps.dataSource !== this.state.dataSource) {
      this._dataSource = debounce(this.props.dataSource);

      this.setState({dataSource: this.props.dataSource});
    }
  }

  componentDidMount() {
    this.calcHeight();

    if (this.props.autoFetch) {
      this.fetch();
    }

    document.addEventListener('click', this.onClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickOutside, true);
  }

  getFetchParams(params = {}) {
    return Object.assign({}, this.props.fetchParams, params);
  }

  isMultiple() {
    return this.props.multiple;
  }

  isActive() {
    return !this.isDisabled();
  }

  isClearable() {
    return (this.props.clearable && !this.isDisabled());
  }

  isSearchable() {
    return (this.props.searchable && !this.isDisabled());
  }

  isDisabled() {
    return this.props.disabled;
  }

  clear() {
    this.value = '';

    this.onChange();

    this.props.onClear && this.props.onClear();
  }

  calcHeight() {
    const searchHeight = 28;

    if (this.isMultiple()) {
      const padding = 2;
      const search = this.isSearchable() ? searchHeight : 0;
      
      if (!this._startHeight) {
        this._startHeight = this.select.clientHeight;
      }

      if (this.refs.tags.clientHeight > this._startHeight) {
        this.select.style.height = (this.refs.tags.clientHeight + padding + search) + 'px';
      } else {
        this.select.style.height = this._startHeight + search + 'px';
      }
    } else {
      if (this.isSearchable()) {
        this.select.style.height = (searchHeight * 2) + 'px';
      }
    }
  }

  fixValue(value) {
    value = value ? value : '';

    if (this.isMultiple()) {
      if (!Array.isArray(value)) {
        value = value ? [value] : [];
      }
    }

    return value;
  }

  get value() {
    return this.state.value;
  }

  set value(value) {
    this.setState({value: this.fixValue(value)}, () => {
      this.calcHeight();

      this.props.onChange && this.props.onChange(this.value);
    });
  }

  addMultiValue(value) {
    if (this.value.indexOf(value) < 0) {
      this.value = [...this.value, value];
    }
  }

  removeMultiValue(value) {
    if (this.value.indexOf(value) >= 0) {
      this.value = this.value.filter(item => (item !== value));
    }
  }

  async fetch(params = {}) {
    let data;

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
      fetched: true,
      fetching: false,
      data: data
    });
  }

  showPopup() {
    if (this.isDisabled()) {
      return;
    }

    this.setState({isOpen: true});

    if (!this.state.fetched) {
      this.fetch();
    }
  }

  hidePopup() {
    this.setState({isOpen: false});
  }

  toggle() {
    this.state.isOpen ? this.hidePopup() : this.showPopup();
  }

  focus() {
    setTimeout(() => {
      this.refs.input && this.refs.input.focus();
    });
  }

  blur() {
    setTimeout(() => {
      this.refs.input && this.refs.input.blur();
    });
  }

  onChange(e) {
    if (this.isActive() && this.props.onChange) {
      this.props.onChange(e);
    }
  }

  onFocus(e) {
    if (!this.state.isFocused) {
      if (this.isActive() && this.props.onFocus) {
        this.props.onFocus(e);
      }
  
      this.setState({isFocused: true});
    }
  }

  onBlur(e) {
    if (this.isActive() && this.props.onBlur) {
      this.props.onBlur(e);
    }

    this.setState({isFocused: false});
  }

  onClick(e) {
    this.toggle();
    
    this.props.onClick && this.props.onClick(e);
  }

  onClickOutside(e) {
    const el = this._domSelect;

    if (!el || !el.contains(e.target)) {
      this.state.isOpen && this.hidePopup();
    }
  }

  renderLabel() {
    let className = '';

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

  renderErrors() {
    return this.props.errors ? (<InputErrors value={ this.props.errors } />) : null;
  }

  renderTags() {
    return (
      <div 
        ref="tags" 
        className={ 'ontime-select-tags' + (this.isSearchable() ? ' searchable': '') }
        onClick={ e => {
          this.focus();
          this.onClick(e);
        } }
      >
        {
          this.value.map((value, idx) => {
            return (
              <Tag 
                key={ idx }
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

  renderInput() {
    const props = {
      ref: 'input',
      className: 'ontime-input-input' + (this.isSearchable() ? ' searchable': '')
    };

    const extraCss = {
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

    let value = this.value;
  
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
        ref={ c => {
          this.select = c;
          this._domSelect = ReactDOM.findDOMNode(c);
        } }
        className={ this.className('ontime-select', extraCss) } 
        style={ this.style() }
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
                onClick={ () => {
                  this.onFocus();
                  this.showPopup();
                } }
                onKeyDown={ debounce(e => this.fetch({search: e.nativeEvent.target.value})) }
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
          onClick={ value => {
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

  render() {
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