import React from 'react';
import { PureComponent, PropTypes } from '../../libs';
import Icon from '../Icon';

/**
 * Class Input
 * 
 * @author Dmytro Hotovskyi
 * @created 19/04/2018
 */
export default class Input extends PureComponent {

  static propTypes = {
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(['top', 'left']),
    type: PropTypes.oneOf(['text', 'number', 'email', 'password']),
    size: PropTypes.oneOf(['large', 'medium', 'small', 'smaller']),
    name: PropTypes.string,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
    disabled: PropTypes.bool,
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    errors: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    onLeftIconClick: PropTypes.func,
    onRightIconClick: PropTypes.func
  }

  static defaultProps = {
    labelPosition: 'top',
    type: 'text',
    size: 'medium'
  }

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
      isFocused: false
    };
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

  isActive() {
    return !this.props.disabled;
  }

  onClick(e) {
    if (this.isActive() && this.props.onClick) {
      this.props.onClick(e);
    }
  }

  onChange(e) {
    if (this.isActive()) {
      
      this.setState({value: this.refs.input.value}, () => {
        this.props.onChange && this.props.onChange(e);
      });
    }
  }

  onFocus(e) {
    if (this.isActive() && this.props.onFocus) {
      this.props.onFocus(e);
    }

    this.setState({isFocused: true});
  }

  onBlur(e) {
    if (this.isActive() && this.props.onBlur) {
      this.props.onBlur(e);
    }

    this.setState({isFocused: false});
  }

  onKeyDown(e) {
    if (this.isActive() && this.props.onKeyDown) {
      this.props.onKeyDown(e);
    }
  }

  onLeftIconClick(e) {
    if (this.isActive() && this.props.onLeftIconClick) {
      this.props.onLeftIconClick(e);
    }
  }

  onRightIconClick(e) {
    if (this.isActive() && this.props.onRightIconClick) {
      this.props.onRightIconClick(e);
    }
  }

  renderLeftIcon() {
    if (this.props.leftIcon) {
      const props = {
        className: "ontime-input-left_icon",
        value: this.props.leftIcon
      };

      if (this.props.onLeftIconClick) {
        props.onClick = this.onLeftIconClick.bind(this);

        props.className = props.className + ' is-clickable';
      }

      return (<Icon { ...props } />);
    }

    return null;
  }

  renderRightIcon() {
    if (this.props.rightIcon) {
      const props = {
        className: "ontime-input-right_icon",
        value: this.props.rightIcon
      };

      if (this.props.onRightIconClick) {
        props.onClick = this.onRightIconClick.bind(this);

        props.className = props.className + ' is-clickable';
      }

      return (<Icon { ...props } />);
    }

    return null;
  }

  renderInput() {
    const props = {
      ref: 'input',
      type: this.props.type || Input.type,
    };

    const extraCss = {
      'is-focused': this.state.isFocused,
      'is-disabled': this.props.disabled,
      'error': (this.props.error && this.props.error.length > 0)
    };

    extraCss[this.props.size || Input.size] = true;

    if (this.props.hasOwnProperty('value')) {
      props.value = this.props.value;
    }

    if (this.props.hasOwnProperty('tabIndex')) {
      props.tabIndex = this.props.tabIndex;
    }

    this.props.name && (props.name = this.props.name);
    this.props.placeholder && (props.placeholder = this.props.placeholder);
    this.props.autoFocus && (props.autoFocus = this.props.autoFocus);
    this.props.disabled && (props.disabled = this.props.disabled);
    this.props.onClick && (props.onClick = this.onClick.bind(this));
    this.props.onKeyDown && (props.onKeyDown = this.onKeyDown.bind(this));
    props.onChange = this.onChange.bind(this);
    props.onFocus = this.onFocus.bind(this);
    props.onBlur = this.onBlur.bind(this);

    return (
      <div className={ this.className('ontime-input', extraCss) } style={ this.style() }>
        { this.renderLeftIcon() }
        <input className="ontime-input-input" { ...props } />
        { this.renderRightIcon() }
      </div>
    );
  }

  render() {
    return this.renderInput();
  }

}
