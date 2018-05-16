import React from 'react';
import { PureComponent, PropTypes } from '../../libs';
import Icon from '../Icon'

/**
 * Class Item
 * 
 * @author Dmytro Hotovskyi
 * @created 10/05/2018
 */
export default class Item extends PureComponent {

  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    selected: PropTypes.bool,
    mapValue: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  }

  render() {
    let content;

    if (this.props.mapValue) {
      if (typeof this.props.mapValue === 'function') {
        content = this.props.mapValue(this.props.data) || '';
      } else {
        content = this.props.data[this.props.mapValue] || '';
      }
    } else {
      content = this.props.data.toString();
    }

    return (
      <React.Fragment>
        { content }
        { this.props.selected && <Icon value="check" /> }
      </React.Fragment>
    );
  }

}