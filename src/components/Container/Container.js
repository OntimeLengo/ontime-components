import React from 'react';
import { PureComponent, PropTypes } from '../../libs';

/**
 * Class Container
 * 
 * @author Helen Gotovska
 * @created 04/08/2018
 */
export default class Container extends PureComponent {

  static propTypes = {
    h: PropTypes.oneOf(['left', 'center', 'right']),
    v: PropTypes.oneOf(['top', 'middle', 'bottom']),
    space: PropTypes.number,
    spaceUnits: PropTypes.string,
    children: PropTypes.any
  }

  static defaultProps = {
    h: 'left',
    v: 'top',
    spaceUnits: 'px'
  }

  getChildren() {
    let children = this.props.children;

    if (this.props.space && Array.isArray(children)) {
      const space = {marginLeft: this.props.space + this.props.spaceUnits};

      children = children.map((child, idx) => {
        if (idx > 0) {
          return React.cloneElement(child, {
            key: child.props.key || idx,
            style: {...space, ...child.props.style}
          });
        } else {
          return React.cloneElement(child, {key: child.props.key || idx});
        }
      });
    }

    return children;
  }

  render() {
    const className = this.className('ontime-container', this.props.h, this.props.v);

    return (
      <div className={ className } style={ this.style() }>
        { this.getChildren() }
      </div>
    );
  }

}
