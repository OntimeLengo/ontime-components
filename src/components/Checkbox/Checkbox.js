import React from 'react';
import { PureComponent, PropTypes } from '../../libs';
import Icon from '../Icon';

/**
 * Class Checkbox
 * 
 * @author Helen Gotovska
 */
export default class Checkbox extends PureComponent {

  static propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.any,
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func
  }

  static defaultProps = {
    type: 'checkbox' // or button
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

  onClick(e) {
    if (this.props.disabled) {
      return;
    }

    this.props.onClick && this.props.onClick(e);
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
    e.persist();
    
    if (this.props.disabled) {
      return;
    }
    
    const value = !this.state.value;

    this.setState({value: value}, () => {
      this.props.onChange && this.props.onChange(value, e);
    });
  }

  render() {
    let className = {
      'is-button': (this.props.type === 'button'),
      'is-disabled': this.props.disabled,
      'is-focused': this.state.isFocused,
      'is-checked': this.state.value
    };

    return (
      <label className={ this.className('ontime-checkbox', className) } style={ this.style() }>
        <Icon 
          className={ this.className('ontime-checkbox__icon') } 
          value={ this.state.value ? 'check-square-o' : 'square-o' }
        />
        <input 
          className="ontime-checkbox__input"
          type="checkbox"
          checked={ this.state.value ? '1' : '0' }
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
