import React from 'react';
import { PureComponent, PropTypes } from '../../libs';
import Icon from '../Icon';

/**
 * Class Notice
 * 
 * @author Helen Gotovska
 * @created 04/05/2018
 */
export default class Notice extends PureComponent {

  static propTypes = {
    type: PropTypes.oneOf(['default', 'success', 'danger', 'warning']),
    onClose: PropTypes.func
  }

  static defaultProps = {
    type: 'default'
  }

  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
  }

  onClose(e) {
    this.props.onClose && this.props.onClose(e);
  }

  render() {
    return (
      <div className={ this.className('ontime-notice', this.props.type) } style={ this.style() }>
        <div className="ontime-notice-body">{ this.props.children }</div>
        { this.props.onClose 
          ? <Icon value="times" onClick={ this.onClose } />
          : null 
        }
      </div>
    );
  }

}
