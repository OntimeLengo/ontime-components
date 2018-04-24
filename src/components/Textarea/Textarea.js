import React from 'react';
import { PureComponent, PropTypes } from '../../libs';
import Label from '../Label';
import InputErrors from '../InputErrors';

/**
 * Class Textarea
 * 
 * @author Dmytro Hotovskyi
 * @created 24/04/2018
 */
export default class Textarea extends PureComponent {

  static propTypes = {
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(['top', 'left', 'right']),
    required: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
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
    onKeyDown: PropTypes.func
  }

  static defaultProps = {
    labelPosition: 'top'
  }

  constructor(props) {
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
      e.persist();
      
      this.props.onKeyDown(e);
    }
  }

  renderLabel() {
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

  renderErrors() {
    return this.props.errors ? (<InputErrors value={ this.props.errors } />) : null;
  }

  renderInput() {
    const props = {
      ref: 'input'
    };

    const extraCss = {
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
    this.props.onClick && (props.onClick = this.onClick.bind(this));
    this.props.onKeyDown && (props.onKeyDown = this.onKeyDown.bind(this));
    props.onChange = this.onChange.bind(this);
    props.onFocus = this.onFocus.bind(this);
    props.onBlur = this.onBlur.bind(this);

    return (
      <textarea
        { ...props }
        className={ this.className('ontime-textarea', extraCss) }
        style={ this.style() }
      />
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
