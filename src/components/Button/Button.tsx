import React, { PureComponent } from 'react';
import { IProps } from '../../libs/interfaces';
import { TFuncClick } from '../../libs/types';
import { Utils } from '../../libs/Utils';
import { Icon } from '../Icon';

type TSize = 'large' | 'medium' | 'small' | 'smaller';
type TType = 'button' | 'submit';
type TKind = 'default' | 'success' | 'danger' | 'warning' | 'ghost' | 'empty';

interface IButtonProps extends IProps {
  type?: TType;
  size?: TSize;
  kind?: TKind;
  label?: string;
  leftIcon?: string;
  rightIcon?: string;
  primary?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: Function;
}

interface IButtonDefProps {
  type: TType;
  size: TSize;
  kind: TKind;
}

/**
 * Class Button
 */
class Button extends PureComponent<IButtonProps & IButtonDefProps> {

  public static defaultProps: IButtonDefProps = {
    type: 'button',
    kind: 'default',
    size: 'medium'
  };

  onClick: TFuncClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    if (!this.props.loading) {
      this.props.onClick && this.props.onClick(e);
    }
  }

  render(): JSX.Element {
    const primary: string = this.props.primary ? 'primary ' : 'common ';
    const extraCss: any = {};

    let LeftIcon: JSX.Element | undefined;
    let RightIcon: JSX.Element | undefined;

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

    extraCss[primary + ' ' + this.props.kind] = true;
    extraCss[this.props.size] = true;
    extraCss['is-disabled'] = this.props.disabled;

    return (
      <button 
        type={ this.props.type }
        className={ Utils.className('ontime-button', this.props.className, extraCss) }
        data-value={ this.props.dataValue }
        style={ this.props.style }
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

export {
  Button,
  IButtonProps,
  TSize,
  TType,
  TKind
};
