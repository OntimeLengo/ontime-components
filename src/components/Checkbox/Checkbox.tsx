import React, { PureComponent } from 'react';
import { IProps } from '../../libs/interfaces';
import { TFuncClick, TFuncChange, TFuncFocus } from '../../libs/types';
import { Utils } from '../../libs/Utils';
import { Icon } from '../Icon';

type TType = 'checkbox' | 'button';

interface ICheckboxProps extends IProps {
  type?: TType;
  label?: string;
  children?: any;
  value?: boolean;
  disabled?: boolean;
  onClick?: Function;
  onFocus?: Function;
  onBlur?: Function;
  onChange?: Function;
}

interface ICheckboxDefProps {
  type: TType;
}

interface ICheckboxState {
  value: boolean;
  isFocused: boolean;
}

/**
 * Class Checkbox
 */
class Checkbox extends PureComponent<ICheckboxProps & ICheckboxDefProps, ICheckboxState> {

  public static defaultProps = {
    type: 'checkbox'
  };

  readonly state: ICheckboxState;

  constructor(props: ICheckboxProps & ICheckboxDefProps) {
    super(props);

    this.state = {
      value: this.props.value || false,
      isFocused: false
    };
  }

  onClick: TFuncClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    if (this.props.disabled) {
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  onFocus: TFuncFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }

    this.setState({isFocused: true});
  };

  onBlur: TFuncFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }

    this.setState({isFocused: false});
  };

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
  };

  get value() {
    return this.state.value;
  }

  set value(value) {
    this.setState({value: value});
  }

  render(): JSX.Element {
    const className: any = {
      'is-button': (this.props.type === 'button'),
      'is-disabled': this.props.disabled,
      'is-focused': this.state.isFocused,
      'is-checked': this.state.value
    };

    return (
      <label className={ Utils.className('ontime-checkbox', this.props.className, className) } style={ this.props.style }>
        <Icon 
          className={ Utils.className('ontime-checkbox__icon') } 
          value={ this.state.value ? 'check-square-o' : 'square-o' }
        />
        <input 
          className="ontime-checkbox__input"
          type="checkbox"
          checked={ this.state.value }
          disabled={ this.props.disabled }
          onClick={ this.onClick }
          onFocus={ this.onFocus }
          onBlur={ this.onBlur }
          onChange={ this.onChange }
        />
        {
          (this.props.children || this.props.label) 
          ? <span className="ontime-checkbox__label">{ this.props.children || this.props.label }</span>
          : null
        }
      </label>
    );
  }

}

export {
  Checkbox,
  ICheckboxProps,
  ICheckboxState
};
