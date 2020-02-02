import React, { PureComponent } from 'react';
import { Utils } from '../../libs/Utils';
import { IProps } from '../../libs/interfaces';
import { TFuncClick, TFuncChange, TFuncFocus } from '../../libs/types';
import { Label } from '../Label';
import { InputErrors, TError } from '../InputErrors';

type TLabelPosition = 'top' | 'left' | 'right';

interface ITextareaProps extends IProps {
  label?: string;
  labelPosition?: TLabelPosition;
  required?: boolean;
  id?: string;
  name?: string;
  value?: any;
  placeholder?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  tabIndex?: string | number;
  errors?: TError[] | null;
  children?: any;
  onClick?: Function;
  onChange?: Function;
  onFocus?: Function;
  onBlur?: Function;
  onKeyDown?: Function;
}

interface ITextareaDefProps {
  labelPosition: TLabelPosition;
}

interface ITextareaState {
  value: any;
  isFocused: boolean;
}

/**
 * Class Textarea
 */
class Textarea extends PureComponent<ITextareaProps & ITextareaDefProps, ITextareaState> {

  static defaultProps: ITextareaDefProps = {
    labelPosition: 'top'
  }

  readonly state: ITextareaState;

  constructor(props: ITextareaDefProps & ITextareaState) {
    super(props);

    this.state = {
      value: this.props.value || this.props.children || '',
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

      const value = (this.refs.input as any).value;

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
  };

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

  renderLabel(): JSX.Element {
    let className = '';

    if (this.props.labelPosition === 'top') {
      className = 'ontime-textarea-label_top';
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
    const { style, className } = this.props;

    const props: Record<string, any> = {
      ref: 'input'
    };

    const extraCss: Record<string, any> = {
      'is-focused': this.state.isFocused,
      'is-disabled': this.props.disabled,
      'error': (this.props.errors && this.props.errors.length > 0)
    };

    if (this.props.hasOwnProperty('tabIndex')) {
      props.tabIndex = this.props.tabIndex;
    }

    props.value = this.state.value;
    this.props.id && (props.id = this.props.id);
    this.props.name && (props.name = this.props.name);
    this.props.placeholder && (props.placeholder = this.props.placeholder);
    this.props.autoFocus && (props.autoFocus = this.props.autoFocus);
    this.props.disabled && (props.disabled = this.props.disabled);
    this.props.onClick && (props.onClick = this.onClick);
    this.props.onKeyDown && (props.onKeyDown = this.onKeyDown);
    props.onChange = this.onChange;
    props.onFocus = this.onFocus;
    props.onBlur = this.onBlur;

    return (
      <textarea
        { ...props }
        className={ Utils.className('ontime-textarea', className, extraCss) } style={ style }
      />
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
          <div className="ontime-wraptextarea">
            <div className="ontime-wraptextarea-label">
              { this.renderLabel() }
            </div>
            <div className="ontime-wraptextarea-input">
              { this.renderInput() }
              { this.renderErrors() }
            </div>
          </div>
        );
      } else if (this.props.labelPosition === 'right') {
        return (
          <div className="ontime-wraptextarea">
            <div className="ontime-wraptextarea-input">
              { this.renderInput() }
              { this.renderErrors() }
            </div>
            <div className="ontime-wraptextarea-label is-right">
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
  Textarea,
  ITextareaProps,
  ITextareaState,
  TLabelPosition
};
