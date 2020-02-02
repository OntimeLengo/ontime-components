import React, { PureComponent } from 'react';
import { IProps } from '../../libs/interfaces';
import { TFuncClick } from '../../libs/types';
import { Utils } from '../../libs/Utils';

interface IIconProps extends IProps {
  value: string;
  size?: string;
  onClick?: Function;
}

/**
 * Class Icon
 */
class Icon extends PureComponent<IIconProps> {

  onClick: TFuncClick = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  render(): JSX.Element {
    let extraClasses: any = {};

    extraClasses.fa = true;
    extraClasses['fa-' + this.props.value] = true;

    if (this.props.size) {
      extraClasses['fa-' + this.props.size] = true;
    }

    return (
      <i 
        className={ Utils.className('ontime-icon', this.props.className, extraClasses) } 
        style={ this.props.style }
        onClick={ this.onClick }
      />
    );
  }

}

export {
  Icon,
  IIconProps
};
