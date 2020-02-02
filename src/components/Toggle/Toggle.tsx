import React, { PureComponent } from 'react';
import { IProps } from '../../libs/interfaces';
import { TFuncClick, TFuncChange, TFuncFocus } from '../../libs/types';
import { Utils } from '../../libs/Utils';

interface IToggleProps extends IProps {
  label?: string;
  children?: any;
  value?: boolean;
  disabled?: boolean;
  onClick?: Function;
  onFocus?: Function;
  onBlur?: Function;
  onChange?: Function;
}

interface IToggleDefProps {
  value: boolean;
}

interface IToggleState {
  value: boolean;
  isFocused: boolean;
}

/**
 * Class Toggle
 */
class Toggle extends PureComponent<IToggleProps & IToggleDefProps, IToggleState> {

  public static defaultProps = {
    value: false
  };

  readonly state: IToggleState;

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.value === prevState.value) {
      return {value: nextProps.value};
    }

    return null;
  }

  constructor(props: IToggleProps & IToggleDefProps) {
    super(props);

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

  render(): JSX.Element {
    let className: Record<string, any> = {
      'is-disabled': this.props.disabled,
      'is-focused': this.state.isFocused,
      'is-checked': this.state.value
    };

    return (
      <label className={ Utils.className('ontime-toggle', this.props.className, className) } style={ this.props.style }>
        <span className="ontime-toggle__icon" />
        <input 
          className="ontime-toggle__input"
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
          ? <span className="ontime-toggle__label">{ this.props.children || this.props.label }</span>
          : null
        }
      </label>
    );
  }

}

export {
  Toggle,
  IToggleProps,
  IToggleState
};
