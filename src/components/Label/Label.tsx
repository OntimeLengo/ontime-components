import React, { PureComponent } from 'react';
import { IProps } from '../../libs/interfaces';
import { Utils } from '../../libs/Utils';

interface ILabelProps extends IProps {
  value?: string;
  required?: boolean;
  children?: any;
}

/**
 * Class Label
 */
class Label extends PureComponent<ILabelProps> {

  public static defaultProps: ILabelProps = {
    value: ''
  };

  render(): JSX.Element {
    return (
      <label className={ Utils.className('ontime-label', this.props.className) } style={ this.props.style }>
        { this.props.value || this.props.children || '' }
        { this.props.required 
          ? <span className="required">*</span>
          : null
        }
      </label>
    );
  }

}

export {
  Label,
  ILabelProps
};
