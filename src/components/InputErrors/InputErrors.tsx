import React, { PureComponent } from 'react';
import { IProps } from '../../libs/interfaces';
import { Utils } from '../../libs/Utils';

type TErrorName = {
  name: string;
}

type TErrorMessage = {
  message: string;
}

type TError = string | Error | TErrorName | TErrorMessage;

interface IInputErrorsProps extends IProps {
  value: TError[] | null;
}

/**
 * Class InputError
 */
class InputErrors extends PureComponent<IInputErrorsProps> {

  render(): JSX.Element | null {
    if (this.props.value && this.props.value.length > 0) {
      return (
        <div className={ Utils.className('ontime-input_errors', this.props.className) }>
          {
            this.props.value.map((item: any, idx): JSX.Element => {
              let message: string;
  
              if (item instanceof Error) {
                message = item.message;
              } else if (typeof item === 'object') {
                message = item.name || item.message;
              } else {
                message = item;
              }
  
              return (<p key={ idx } className="ontime-input_errors-item">{ message }</p>);
            })
          }
        </div>
      );
    } else {
      return null;
    }
  }

}

export {
  InputErrors,
  IInputErrorsProps,
  TError,
  TErrorName,
  TErrorMessage
};
