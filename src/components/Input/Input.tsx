import React, { PureComponent } from 'react';
import { Utils } from '../../libs/Utils';
import { IProps } from '../../libs/interfaces';
import { TFuncClick, TFuncChange, TFuncFocus } from '../../libs/types';
import { Icon, IIconProps } from '../Icon';
import { Label } from '../Label';
import { InputErrors, TError } from '../InputErrors';

type TLabelPosition = 'top' | 'left' | 'right';
type TType = 'text' | 'number' | 'email' | 'password' | 'tel';
type TSize = 'large' | 'medium' | 'small' | 'smaller';

interface IInputProps extends IProps {
  label?: string;
  labelPosition?: TLabelPosition;
  required?: boolean;
  type?: TType;
  size?: TSize;
  id?: string;
  name?: string;
  leftIcon?: string;
  rightIcon?: string;
  value?: string | number;
  placeholder?: string;
  pattern?: string;
  mask?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  tabIndex?: string | number;
  errors?: TError[] | null;
  format?: Function;
  onClick?: Function;
  onChange?: Function;
  onFocus?: Function;
  onBlur?: Function;
  onKeyDown?: Function;
  onLeftIconClick?: Function;
  onRightIconClick?: Function;
}

interface IInputDefProps {
  labelPosition: TLabelPosition;
  type: TType;
  size: TSize;
}

interface IInputState {
  value: string | number;
  isFocused: boolean;
}

/**
 * Class Input
 */
class Input extends PureComponent<IInputProps & IInputDefProps, IInputState> {

  static defaultProps: IInputDefProps = {
    labelPosition: 'top',
    type: 'text',
    size: 'small'
  }

  readonly state: IInputState;

  constructor(props: IInputProps & IInputDefProps) {
    super(props);

    this.state = {
      value: this.props.value || '',
      isFocused: false
    };
  }

  get value() {
    return this.state.value;
  }

  set value(value) {
    this.setState({value: value});
  }

  onClick: TFuncClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    if (this.isActive() && this.props.onClick) {
      this.props.onClick(e);
    }
  };

  onChange: TFuncChange = (e: React.ChangeEvent<HTMLElement>): void => {
    if (this.isActive()) {
      e.persist();

      let value = (this.refs.input as any).value;

      if (this.props.format) {
        value = this.props.format(value);
      }

      this.setState({ value }, () => {
        this.props.onChange && this.props.onChange(e);
      });
    }
  };

  onFocus: TFuncFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (this.isActive() && this.props.onFocus) {
      this.props.onFocus(e);
    }

    this.setState({isFocused: true});
  }

  onBlur: TFuncFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (this.isActive() && this.props.onBlur) {
      this.props.onBlur(e);
    }

    this.setState({isFocused: false});
  };

  onKeyDown: TFuncClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    if (this.isActive() && this.props.onKeyDown) {
      e.persist();
      
      this.props.onKeyDown(e);
    }
  };

  onLeftIconClick: TFuncClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    if (this.isActive() && this.props.onLeftIconClick) {
      this.props.onLeftIconClick(e);
    }
  };

  onRightIconClick: TFuncClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    if (this.isActive() && this.props.onRightIconClick) {
      this.props.onRightIconClick(e);
    }
  };

  focus() {
    setTimeout(() => {
      this.refs.input && (this.refs.input as any).focus();
    });
  }

  blur() {
    setTimeout(() => {
      this.refs.input && (this.refs.input as any).blur();
    });
  }

  isActive() {
    return !this.props.disabled;
  }

  renderLeftIcon(): JSX.Element | null {
    if (this.props.leftIcon) {
      const props: IIconProps = {
        className: "ontime-input-left_icon",
        value: this.props.leftIcon
      };

      if (this.props.onLeftIconClick) {
        props.onClick = this.onLeftIconClick;

        props.className = props.className + ' is-clickable';
      }

      return (<Icon { ...props } />);
    }

    return null;
  }

  renderRightIcon(): JSX.Element | null {
    if (this.props.rightIcon) {
      const props: IIconProps = {
        className: "ontime-input-right_icon",
        value: this.props.rightIcon
      };

      if (this.props.onRightIconClick) {
        props.onClick = this.onRightIconClick;

        props.className = props.className + ' is-clickable';
      }

      return (<Icon { ...props } />);
    }

    return null;
  }

  renderLabel(): JSX.Element {
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

  renderErrors(): JSX.Element | null {
    return this.props.errors ? (<InputErrors value={ this.props.errors } />) : null;
  }

  renderInput(): JSX.Element {
    const { type, disabled, errors, size, style, className } = this.props;

    const props: any = {
      type,
      ref: 'input',
    };

    const extraCss: any = {
      'is-focused': this.state.isFocused,
      'is-disabled': disabled,
      'error': (errors && errors.length > 0)
    };

    extraCss[size] = true;

    if (this.props.hasOwnProperty('tabIndex')) {
      props.tabIndex = this.props.tabIndex;
    }

    props.value = this.state.value || '';
    this.props.id && (props.id = this.props.id);
    this.props.name && (props.name = this.props.name);
    this.props.placeholder && (props.placeholder = this.props.placeholder);
    this.props.pattern && (props.pattern = this.props.pattern);
    this.props.autoFocus && (props.autoFocus = this.props.autoFocus);
    this.props.disabled && (props.disabled = this.props.disabled);
    this.props.onClick && (props.onClick = this.onClick);
    this.props.onKeyDown && (props.onKeyDown = this.onKeyDown);
    props.onChange = this.onChange;
    props.onFocus = this.onFocus;
    props.onBlur = this.onBlur;

    return (
      <div className={ Utils.className('ontime-input', className, extraCss) } style={ style }>
        { this.renderLeftIcon() }
        <input className="ontime-input-input" { ...props } />
        { this.renderRightIcon() }
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
  Input,
  IInputProps,
  IInputState
};
