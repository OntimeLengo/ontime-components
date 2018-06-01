import React from 'react';
import { PureComponent, PropTypes } from '../../libs';

/**
 * Class Icon
 * 
 * @author Dmytro Hotovskyi
 * @created 28/03/2018
 */
export default class Icon extends PureComponent {

  static propTypes = {
    value: PropTypes.string.isRequired,
    size: PropTypes.string,
    onClick: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.onClick && this.props.onClick(e);
  }

  render() {
    let extraClasses = {};

    extraClasses.fa = true;
    extraClasses['fa-' + this.props.value] = true;
    this.props.size && (extraClasses['fa-' + this.props.size] = true);

    return (
      <i 
        className={ this.className('ontime-icon', extraClasses) } 
        style={ this.style() }
        onClick={ this.onClick }
      />
    );
  }

}
