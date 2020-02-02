import React, { PureComponent } from 'react';
import { IProps } from '../../libs/interfaces';
import { Utils } from '../../libs/Utils';

interface ITextProps extends IProps {
  value?: string | number;
  strong?: boolean;
  children?: any;
}

/**
 * Class Text
 */
class Text extends PureComponent<ITextProps> {

  render(): JSX.Element {
    const { style, className } = this.props;

    return (
      <p className={ Utils.className('ontime-text', className) } style={ style }>
        { this.props.strong 
          ? <strong>{ this.props.value || this.props.children }</strong>
          : this.props.value || this.props.children
        }
      </p>
    );
  }

}

export {
  Text,
  ITextProps
};
