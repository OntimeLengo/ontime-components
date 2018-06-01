import React from 'react';
import { PureComponent, PropTypes } from '../../libs';
import Icon from '../Icon';

/**
 * Class Button
 * 
 * @author Dmytro Hotovskyi
 * @created 28/03/2018
 */
export default class Button extends PureComponent {

  static propTypes = {
    label: PropTypes.string,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    type: PropTypes.string,
    primary: PropTypes.bool,
    kind: PropTypes.string,
    size: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    type: 'button',
    kind: 'default',
    size: 'medium'
  }

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (!this.props.loading) {
      this.props.onClick && this.props.onClick(e);
    }
  }

  render() {
    let primary = this.props.primary ? 'primary ' : 'common ';
    let extraCss = {};
    let LeftIcon, RightIcon;

    if (this.props.label) {
      if (this.props.leftIcon) {
        LeftIcon = (<Icon className="ontime-button-left_icon" value={ this.props.leftIcon } />);
      }

      if (this.props.rightIcon) {
        RightIcon = (<Icon className="ontime-button-right_icon" value={ this.props.rightIcon } />);
      }
    } else {
      if (this.props.leftIcon) {
        LeftIcon = (<Icon value={ this.props.leftIcon } />);
      } else if (this.props.rightIcon) {
        LeftIcon = (<Icon value={ this.props.rightIcon } />);
      }
    }

    extraCss[primary + (this.props.kind || Button.defaultProps.kind)] = true;
    extraCss[this.props.size || Button.defaultProps.size] = true;
    extraCss['is-disabled'] = this.props.disabled;

    return (
      <button 
        type={ this.props.type || Button.defaultProps.type }
        className={ this.className('ontime-button', extraCss) }
        style={ this.style() }
        disabled={ this.props.disabled }
        onClick={ this.onClick }
      >
        { this.props.loading ? <Icon value="spinner" className="fa-spin" /> : null }
        { LeftIcon ? LeftIcon : null }
        { this.props.label ? <span className="ontime-button-label">{ this.props.label }</span> : null }
        { RightIcon ? RightIcon : null }
      </button>
    );
  }

}
