import React from 'react';
import { PureComponent, PropTypes } from '../../libs';
import Icon from '../Icon';
import Label from '../Label';
import InputErrors from '../InputErrors';

/**
 * Class Input
 * 
 * @author Helen Gotovska
 */
export default class Input extends PureComponent {

  static propTypes = {
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(['top', 'left', 'right']),
    required: PropTypes.bool,
    type: PropTypes.oneOf(['text', 'number', 'email', 'password', 'tel']),
    size: PropTypes.oneOf(['large', 'medium', 'small', 'smaller']),
    id: PropTypes.string,
    name: PropTypes.string,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    pattern: PropTypes.string,
    mask: PropTypes.string,
    autoFocus: PropTypes.bool,
    disabled: PropTypes.bool,
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    errors: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
    format: PropTypes.func,
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
    size: 'small'
  }

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onLeftIconClick = this.onLeftIconClick.bind(this);
    this.onRightIconClick = this.onRightIconClick.bind(this);

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
      e.persist();

      let value = this.refs.input.value;

      if (this.props.format) {
        value = this.props.format(value);
      }

      this.setState({ value }, () => {
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
      e.persist();
      
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
        props.onClick = this.onLeftIconClick;

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
        props.onClick = this.onRightIconClick;

        props.className = props.className + ' is-clickable';
      }

      return (<Icon { ...props } />);
    }

    return null;
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

  renderInput() {
    const props = {
      ref: 'input',
      type: this.props.type,
    };

    const extraCss = {
      'is-focused': this.state.isFocused,
      'is-disabled': this.props.disabled,
      'error': (this.props.errors && this.props.errors.length > 0)
    };

    extraCss[this.props.size] = true;

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
      <div className={ this.className('ontime-input', extraCss) } style={ this.style() }>
        { this.renderLeftIcon() }
        <input className="ontime-input-input" { ...props } />
        { this.renderRightIcon() }
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
