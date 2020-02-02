import React, { PureComponent } from 'react';
import { Utils } from '../../libs/Utils';
import { IProps } from '../../libs/interfaces';

interface ITableProps extends IProps {
  row: Function;
  data?: any[];
  head?: Function;
}

interface ITableDefProps {
  data: any[];
}

/**
 * Class Table
 */
class Table extends PureComponent<ITableProps & ITableDefProps> {

  static defaultProps: ITableDefProps = {
    data: []
  }

  render(): JSX.Element {
    const { style, className } = this.props;

    return (
      <table className={ Utils.className('ontime-table', className) } style={ style }>
        { this.props.head
          ? <thead>
              { this.props.head(this.props.data) }
            </thead>
          : null 
        }
        <tbody>
          { this.props.data.map((item, idx) => this.props.row(item, idx, this.props.data)) }
        </tbody>
      </table>
    );
  }

}

export {
  Table,
  ITableProps
};
