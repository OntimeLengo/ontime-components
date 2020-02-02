import React, { PureComponent } from 'react';
import { IProps } from '../../libs/interfaces';
import { Utils } from '../../libs/Utils';

interface IRowProps extends IProps {
  sizes?: number[];
  children?: any[];
}

interface IRowDefProps {
  sizes: number[];
  children: any[];
}

/**
 * Class Row
 */
class Row extends PureComponent<IRowProps & IRowDefProps> {

  public static defaultProps: IRowDefProps = {
    sizes: [],
    children: []
  };

  static maxColumns = 12;

  constructor(props: IRowProps & IRowDefProps) {
    super(props);

    const childrenLen: number = this.props.children.length;
    const sizesLen: number = this.props.sizes.length;

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

  render(): JSX.Element {
    const { style, className } = this.props;

    let sizes: number[];

    if (this.props.sizes.length > 0) {
      sizes = this.props.sizes;
    } else {
      const childrenLen = this.props.children.length;
      const len = Math.floor(Row.maxColumns / childrenLen);

      sizes = this.props.children.map(() => len);

      const fullLen = childrenLen * len;

      if (fullLen < Row.maxColumns) {
        sizes[childrenLen - 1] = Row.maxColumns - fullLen + len;
      }
    }

    return (
      <div className={ Utils.className('ontime-row', className) } style={ style }>
        { this.props.children.map((item, idx: number) => {
          return (<div key={ idx } className={ 'ontime-row-col col-' + sizes[idx]}>{ item }</div>);
        }) }
      </div>
    );
  }

}

export {
  Row,
  IRowProps
};
