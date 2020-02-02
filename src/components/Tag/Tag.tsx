import React, { PureComponent } from 'react';
import { IProps } from '../../libs/interfaces';
import { Utils } from '../../libs/Utils';
import { TFuncClick } from '../../libs/types';
import { Icon } from '../Icon';

function stop(e: any) {
  if (e && e.preventDefault) {
    e.preventDefault();
    e.stopPropagation();
  }
}

type TMapValue = string | Function;

interface ITagProps extends IProps {
  value: any;
  mapValue?: TMapValue;
  isClosable?: boolean;
  onClose?: Function;
  onClick?: Function;
  onDoubleClick?: Function;
}

interface ITagDefProps {
  isClosable: boolean;
}

/**
 * Class Tag
 */
class Tag extends PureComponent<ITagProps & ITagDefProps> {

  static defaultProps = {
    isClosable: true
  }

  onClose: TFuncClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    stop(e);

    if (this.props.onClose) {
      this.props.onClose(e);
    }
  }

  onClick: TFuncClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    stop(e);

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  onDoubleClick: TFuncClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    stop(e);

    if (this.props.onDoubleClick) {
      this.props.onDoubleClick(e);
    }
  }

  render(): JSX.Element {
    const props: any = {};
    const propsIcon: any = {};
    const className: any = {'is-closable': this.props.isClosable};

    if (this.props.onClose) {
      propsIcon.onClick = this.onClose;
    }

    if (this.props.onClick) {
      props.onClick = this.onClick;
    }

    if (this.props.onDoubleClick) {
      props.onDoubleClick = this.onDoubleClick;
    }

    let value: any = this.props.value;

    if (this.props.mapValue) {
      if (typeof this.props.mapValue === 'function') {
        value = this.props.mapValue(value);
      } else {
        value = value[this.props.mapValue];
      }
    }

    return (
      <span 
        { ...props }
        className={ Utils.className('ontime-tag', this.props.className, className) } 
        style={ this.props.style }
      >
        { value }
        { this.props.isClosable 
          ? <Icon { ...propsIcon } value="times-circle" />
          : null 
        }
      </span>
    );
  }

}

export {
  Tag,
  ITagProps
};
