import React from 'react';
import { PureComponent, PropTypes } from '../../libs';
import Icon from '../Icon';
import Label from '../Label';

/**
 * Class Check
 * 
 * @author Dmytro Hotovskyi
 * @created 31/03/2018
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

    this.state = {
      value: this.props.value,
      isFocused: false
    };
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
    if (this.props.disabled) {
      return;
    }
    
    const value = !this.state.value;

    this.props.onChange && this.props.onChange(value, e);

    this.setState({value: value});
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
          checked={ this.state.value }
          disabled={ this.props.disabled }
          onClick={ this.onClick.bind(this) }
          onFocus={ this.onFocus.bind(this) }
          onBlur={ this.onBlur.bind(this) }
          onChange={ this.onChange.bind(this) }
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