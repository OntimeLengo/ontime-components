import React from 'react';
import { PureComponent, PropTypes } from '../../libs';

/**
 * Class Row
 * 
 * @author Olena Gotovska
 * @created 24/05/2018
 */
export default class Row extends PureComponent {

  static propTypes = {
    sizes: PropTypes.array,
    children: PropTypes.array
  }

  static defaultProps = {
    sizes: [],
    children: []
  }

  static maxColumns = 12

  constructor(props) {
    super(props);

    const childrenLen = this.props.children.length;
    const sizesLen = this.props.sizes.length;

    if (childrenLen > Row.maxColumns) {
      throw new Error('Row: Children property must contain only ' + Row.maxColumns + ' columns.');
    }

    if (sizesLen > 0 && (sizesLen !== childrenLen)) {
      throw new Error('Row: Length of sizes property must be the same as children size.');
    }

    let columns = this.props.children.reduce((acc, size, idx) => {
      if (this.props.sizes[idx] > 0) {
        acc = acc + this.props.sizes[idx];
      } else {
        acc++;
      }

      return acc;
    }, 0);

    if (columns > Row.maxColumns) {
      throw new Error('Row: Column size is not correct. Sum of columns must be' + Row.maxColumns);
    }
  }

  render() {
    let sizes;

    if (this.props.sizes.length > 0) {
      sizes = this.props.sizes;
    } else {
      const childrenLen = this.props.children.length;
      const len = Math.floor(Row.maxColumns / childrenLen);

      sizes = this.props.children.map((item, idx) => {
        return len;
      });

      const fullLen = childrenLen * len;

      if (fullLen < Row.maxColumns) {
        sizes[childrenLen - 1] = Row.maxColumns - fullLen + len;
      }
    }

    return (
      <div className={ this.className('ontime-row') } style={ this.style() }>
        { this.props.children.map((item, idx) => {
          return (<div key={ idx } className={ 'ontime-row-col col-' + sizes[idx]}>{ item }</div>);
        }) }
      </div>
    );
  }

}