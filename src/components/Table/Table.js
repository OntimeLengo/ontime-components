import React from 'react';
import { PureComponent, PropTypes } from '../../libs';

/**
 * Class Table
 * 
 * @author Helen Gotovska
 */
export default class Table extends PureComponent {

  static propTypes = {
    row: PropTypes.func.isRequired,
    data: PropTypes.array,
    head: PropTypes.func
  }

  static defaultProps = {
    data: []
  }

  render() {
    return (
      <table className={ this.className('ontime-table') } style={ this.style() }>
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
