import React from 'react';
import { PureComponent, PropTypes } from '../../libs';
import Icon from '../Icon';

function stop(e) {
  if (e && e.preventDefault) {
    e.preventDefault();
    e.stopPropagation();
  }
}

/**
 * Class Tag
 * 
 * @author Dmytro Hotovskyi
 * @created 24/04/2018
 */
export default class Tag extends PureComponent {

  static propTypes = {
    value: PropTypes.string.isRequired,
    isClosable: PropTypes.bool,
    onClose: PropTypes.func,
    onClick: PropTypes.func,
    onDoubleClick: PropTypes.func
  }

  static defaultProps = {
    isClosable: true
  }

  onClose(e) {
    stop(e);

    this.props.onClose && this.props.onClose(e);
  }

  onClick(e) {
    stop(e);

    this.props.onClick && this.props.onClick(e);
  }

  onDoubleClick(e) {
    stop(e);

    this.props.onDoubleClick && this.props.onDoubleClick(e);
  }

  render() {
    const props = {};
    const propsIcon = {};

    this.props.onClose && (propsIcon.onClick = this.onClose.bind(this));

    this.props.onClick && (props.onClick = this.onClick.bind(this));
    this.props.onDoubleClick && (props.onDoubleClick = this.onDoubleClick.bind(this));

    return (
      <span 
        { ...props }
        className={ this.className('ontime-tag') } 
        style={ this.style() }
      >
        { this.props.value }
        { this.props.isClosable 
          ? <Icon { ...propsIcon } value="times" />
          : null 
        }
      </span>
    );
  }

}