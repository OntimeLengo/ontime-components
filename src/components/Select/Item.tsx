import React, { PureComponent, Fragment } from 'react';
import { IProps } from '../../libs/interfaces';
import { Icon } from '../Icon'

type TMapValue = string | Function;

interface IItemSelectProps extends IProps {
  data?: any;
  selected?: boolean;
  mapValue?: TMapValue;
}

/**
 * Class Item
 */
class Item extends PureComponent<IItemSelectProps> {

  render(): JSX.Element {
    let content;

    if (this.props.mapValue) {
      if (typeof this.props.mapValue === 'function') {
        content = this.props.mapValue(this.props.data) || '';
      } else {
        content = this.props.data[this.props.mapValue] || '';
      }
    } else {
      content = this.props.data.toString();
    }

    return (
      <Fragment>
        { content }
        { this.props.selected && <Icon value="check" /> }
      </Fragment>
    );
  }

}

export {
  Item,
  IItemSelectProps
};
