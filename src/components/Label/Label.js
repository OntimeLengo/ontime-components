import React from 'react';
import { PureComponent, PropTypes } from '../../libs';

/**
 * Class Label
 * 
 * @author Dmytro Hotovskyi
 * @created 26/03/2018
 */
export default class Label extends PureComponent {

  static propTypes = {
    value: PropTypes.string,
    required: PropTypes.bool,
    children: PropTypes.any
  }

  render() {
    return (
      <label className={ this.className('ontime-label') } style={ this.style() }>
        { this.props.value || this.props.children || '' }
        { this.props.required 
          ? <span className="required">*</span>
          : null
        }
      </label>
    );
  }

}