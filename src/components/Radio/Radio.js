import React from 'react';
import { PureComponent, PropTypes } from '../../libs';

/**
 * Class Radio
 * 
 * @author Helen Gotovska
 */
export default class Radio extends PureComponent {

  static propTypes = {
    label: PropTypes.any,
    children: PropTypes.any,
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func
  }

  constructor(props = {}) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      value: this.props.value,
      isFocused: false
    };
  }

  get value() {
    return this.state.value;
  }

  set value(value) {
    this.setState({value: value});
  }

  componentWillReceiveProps(nextProps = {}) {
    this.setState({
      value: nextProps.value
    });
  }

  onClick(e) {
    if (this.props.disabled) {
      return;
    }

    this.props.onClick && this.props.onClick(e, this.state.value);
  }

  onFocus(e) {
    this.props.onFocus && this.props.onFocus(e);

    this.setState({isFocused: true});
  }

  onBlur(e) {
    this.props.onBlur && this.props.onBlur(e);

    this.setState({isFocused: false});
  }

  onChange(e) {
    if (this.props.disabled) {
      return;
    }
    
    const value = !this.state.value;

    this.props.onChange && this.props.onChange(value, e);

    this.setState({value: value});
  }

  render() {
    let className = {
      'is-disabled': this.props.disabled,
      'is-focused': this.state.isFocused,
      'is-checked': this.state.value
    };

    return (
      <label className={ this.className('ontime-radio', className) } style={ this.style() }>
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