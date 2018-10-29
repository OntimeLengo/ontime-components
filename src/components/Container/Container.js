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
    direction: PropTypes.oneOf(['row', 'column']),
    full: PropTypes.bool,
    space: PropTypes.number,
    spaceUnits: PropTypes.string,
    children: PropTypes.any
  }

  static defaultProps = {
    direction: 'row',
    h: 'left',
    v: 'top',
    spaceUnits: 'px',
    full: true
  }

  getChildren() {
    let children = React.Children.toArray(this.props.children);

    if (this.props.space) {
      const space = {marginLeft: this.props.space + this.props.spaceUnits};

      children = children.map((child, idx) => {
        if (idx > 0) {
          return React.cloneElement(child, {
            key: child.props.key || ('k-' + idx),
            style: {...space, ...child.props.style}
          });
        } else {
          return React.cloneElement(child, {key: child.props.key || ('k-' + idx)});
        }
      });
    }

    return children;
  }

  render() {
    const extraClass = {};

    extraClass[this.props.h] = true;
    extraClass[this.props.v] = true;
    extraClass[this.props.direction] = true;
    extraClass.full = this.props.full;

    return (
      <div className={ this.className('ontime-container', extraClass) } style={ this.style() }>
        { this.getChildren() }
      </div>
    );
  }

}
