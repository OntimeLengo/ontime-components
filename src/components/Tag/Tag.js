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
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]).isRequired,
    mapValue: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    isClosable: PropTypes.bool,
    onClose: PropTypes.func,
    onClick: PropTypes.func,
    onDoubleClick: PropTypes.func
  }

  static defaultProps = {
    isClosable: true
  }

  constructor(props) {
    super(props);
    
    this.onClose = this.onClose.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onDoubleClick = this.onDoubleClick.bind(this);
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

    this.props.onClose && (propsIcon.onClick = this.onClose);
    this.props.onClick && (props.onClick = this.onClick);
    this.props.onDoubleClick && (props.onDoubleClick = this.onDoubleClick);

    let value = this.props.value;

    if (this.props.mapValue) {
      if (typeof this.props.mapValue === 'function') {
        value = this.props.mapValue(value);
      } else {
        value = value[this.props.mapValue];
      }
    }

    return (
      <span 
        { ...props }
        className={ this.className('ontime-tag') } 
        style={ this.style() }
      >
        { value }
        { this.props.isClosable 
          ? <Icon { ...propsIcon } value="times-circle" />
          : null 
        }
      </span>
    );
  }

}