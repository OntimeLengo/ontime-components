import React, { PureComponent } from 'react';
import { IProps, IState } from '../../libs/interfaces';
import { TFuncClick, TFuncChange, TFuncFocus } from '../../libs/types';
import { Utils } from '../../libs/Utils';

interface IRadioProps extends IProps {
  label?: string,
  children?: any,
  value?: boolean,
  disabled?: boolean,
  onClick?: Function;
  onFocus?: Function;
  onBlur?: Function;
  onChange?: Function;
}

interface IRadioDefProps {
  value: boolean;
}

interface IRadioState extends IState {
  value: boolean;
  isFocused: boolean;
}

/**
 * Class Radio
 */
class Radio extends PureComponent<IRadioProps & IRadioDefProps, IRadioState> {

  public static defaultProps: IRadioDefProps = {
    value: false
  };

  readonly state: IRadioState;

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.value !== prevState.value) {
      return {value: nextProps.value};
    }

    return null;
  }

  constructor(props: IRadioProps & IRadioDefProps) {
    super(props);

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      value: this.props.value,
      isFocused: false
    };
  }

  onClick: TFuncClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    if (this.props.disabled) {
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e, this.state.value);
    }
  }

  onFocus: TFuncFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }

    this.setState({isFocused: true});
  }

  onBlur: TFuncFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }

    this.setState({isFocused: false});
  }

  onChange: TFuncChange = (e: React.ChangeEvent<HTMLElement>): void => {
    e.persist();
    
    if (this.props.disabled) {
      return;
    }
    
    const value = !this.state.value;

    this.setState({ value }, () => {
      if (this.props.onChange) {
        this.props.onChange(value, e);
      }
    });
  }

  get value() {
    return this.state.value;
  }

  set value(value) {
    this.setState({ value });
  }

  render(): JSX.Element {
    let className = {
      'is-disabled': this.props.disabled,
      'is-focused': this.state.isFocused,
      'is-checked': this.state.value
    };

    return (
      <label className={ Utils.className('ontime-radio', this.props.className, className) } style={ this.props.style }>
        <span className="ontime-radio__icon">
          { this.state.value 
            ? <span className="ontime-radio__dot" />
            : null 
          }
        </span>
        <input 
          className="ontime-radio__input"
          type="radio"
          checked={ this.state.value }
          disabled={ this.props.disabled }
          onClick={ this.onClick }
          onFocus={ this.onFocus }
          onBlur={ this.onBlur }
          onChange={ this.onChange }
        />
        {
          (this.props.children || this.props.label) 
          ? <span className="ontime-radio__label">{ this.props.children || this.props.label }</span>
          : null
        }
      </label>
    );
  }

}

export {
  Radio,
  IRadioProps,
  IRadioState
};
