import React from 'react';
import { PureComponent, PropTypes } from '../../libs';
import Label from '../Label';
import Button from '../Button'
import Radio from './Radio';
import InputErrors from '../InputErrors';

/**
 * Class RadioGroup
 * 
 * @author Helen Gotovska
 */
export default class RadioGroup extends PureComponent {

  static propTypes = {
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(['top', 'left', 'right']),
    required: PropTypes.bool,
    name: PropTypes.string,
    kind: PropTypes.oneOf(['radio', 'button']),
    position: PropTypes.oneOf(['row', 'column']),
    size: PropTypes.string,
    data: PropTypes.array,
    mapValue: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    errors: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    value: PropTypes.any
  }

  static defaultProps = {
    labelPosition: 'top',
    position: 'row',
    kind: 'radio',
    size: 'medium',
    data: []
  }

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    };
  }

  get value() {
    return this.state.value;
  }

  set value(value) {
    this.setState({value: value});
  }

  setState(state) {
    return new Promise(resolve => super.setState(state, () => resolve()));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({value: nextProps.value});
    }
  }

  onClick(item, e) {
    this.props.onClick && this.props.onClick(item, e);
  }

  onChange(item) {
    this.props.onChange && this.props.onChange(item);
  }

  async onBlur(item) {
    this.props.onBlur && this.props.onBlur(item);

    this.setState({value: item});
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

  renderRadio(data, idx) {
    let label;

    if (typeof data === 'string') {
      label = data;
    } else if (!Array.isArray(data) && typeof data === 'object') {
      if (this.props.mapValue) {
        if (typeof this.props.mapValue === 'function') {
          label = this.props.mapValue(data) || '';
        } else {
          label = data[this.props.mapValue] || '';
        }
      } else {
        label = data.name;
      }
    } else {
      throw new Error('RadioGroup: Incorrect value type. It should be string or object');
    }

    if (this.props.kind === 'radio') {
      return (
        <Radio 
          key={ idx }
          label={ label }
          value={ (data === this.state.value) } 
          onClick={ async e => {
            await this.setState({value: data});
  
            this.onClick(data, e);
            this.onChange(data);
            this.onBlur(data);
          } }
        />
      );
    } else if (this.props.kind === 'button') {
      return (
        <Button 
          key={ idx }
          label={ label }
          primary={ (data === this.state.value) }
          kind={ (data === this.state.value) ? 'default' : 'ghost' } 
          size={ this.props.size }
          onClick={ async e => {
            await this.setState({value: data});
  
            this.onClick(data, e);
            this.onChange(data);
            this.onBlur(data);
          } }
        />
      );
    } else {
      throw new Error('RadioGroup: Unknown type ' + this.props.kind);
    }
  }

  renderInput() {
    const extraClass = {
      buttons: (this.props.kind === 'button')
    };

    extraClass[this.props.position] = true;

    return (
      <div className={ this.className('ontime-radiogroup', extraClass) } style={ this.style() }>
        { this.props.data.map((value, idx) => this.renderRadio(value, idx)) }
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
