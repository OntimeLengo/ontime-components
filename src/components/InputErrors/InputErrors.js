import React from 'react';
import { PureComponent, PropTypes } from '../../libs';

/**
 * Class InputError
 * 
 * @author Dmytro Hotovskyi
 * @created 21/04/2018
 */
export default class InputErrors extends PureComponent {

  static propTypes = {
    value: PropTypes.array
  }

  render() {
    if (this.props.value && this.props.value.length > 0) {
      return (
        <div className="ontime-input_errors">
          {
            this.props.value.map((item, idx) => {
              let message;
  
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
