import React from 'react';
import { PureComponent, PropTypes } from '../../libs';

/**
 * Class Text
 * 
 * @author Helen Gotovska
 */
export default class Label extends PureComponent {

  static propTypes = {
    value: PropTypes.string,
    strong: PropTypes.bool,
    children: PropTypes.any
  }

  render() {
    return (
      <p className={ this.className('ontime-text') } style={ this.style() }>
        { this.props.strong 
          ? <strong>{ this.props.value || this.props.children }</strong>
          : this.props.value || this.props.children
        }
      </p>
    );
  }

}