import React, { PureComponent } from 'react';
import { IProps } from '../../libs/interfaces';
import { TFuncClick } from '../../libs/types';
import { Utils } from '../../libs/Utils';
import { Icon } from '../Icon';

type TType = 'default' | 'success' | 'danger' | 'warning';

interface INoticeProps extends IProps {
  type?: TType;
  onClose?: Function;
}

interface INoticeDefProps {
  type: TType;
}

/**
 * Class Notice
 */
class Notice extends PureComponent<INoticeProps & INoticeDefProps> {

  public static defaultProps: INoticeDefProps = {
    type: 'default'
  };

  onClose: TFuncClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    if (this.props.onClose) {
      this.props.onClose(e);
    }
  }

  render() {
    return (
      <div 
        className={ Utils.className('ontime-notice', this.props.type, this.props.className) } 
        style={ this.props.style }
      >
        <div className="ontime-notice-body">{ this.props.children }</div>
        { this.props.onClose 
          ? <Icon value="times" onClick={ this.onClose } />
          : null 
        }
      </div>
    );
  }

}

export {
  Notice,
  INoticeProps,
  INoticeDefProps
};
