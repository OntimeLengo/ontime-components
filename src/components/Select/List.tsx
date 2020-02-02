import React, { PureComponent } from 'react';
import { IProps } from '../../libs/interfaces';
import { TFuncClick } from '../../libs/types';
import { Utils } from '../../libs/Utils';
import { Icon } from '../Icon'
import { Item } from './Item';

type TMapValue = string | Function;

interface IListSelectProps extends IProps {
  data: any[];
  onClick: Function;
  multiple?: boolean;
  value?: any;
  customItemTpl?: Function;
  mapValue?: TMapValue;
  isOpen?: boolean;
  fetching?: boolean;
}

/**
 * Class List
 */
class List extends PureComponent<IListSelectProps> {

  onClick: TFuncClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    let el = e.target;
    let ul = e.currentTarget;

    for (let i = 0; ul.children[i]; i++) {
      let li: any = ul.children[i];

      if ((el === li) || li.contains(el)) {
        const at = parseInt(li.dataset.at);
    
        if (this.props.data[at]) {
          this.props.onClick(this.props.data[at]);
        }

        break;
      }
    }
  }

  renderItem(item: any, idx: number): JSX.Element {
    const strIdx = idx.toString();

    let selected: boolean = false;

    if (this.props.multiple) {
      if (this.props.value.indexOf(item) >= 0) {
        selected = true;
      }
    } else {
      if (item === this.props.value) {
        selected = true;
      }
    }

    return (
      <li
        key={ strIdx } 
        className={ 'ontime-select-item ' + (selected ? 'selected' : '') }
        data-at={ strIdx }
      >
        { this.props.customItemTpl
          ? this.props.customItemTpl(item, selected, idx)
          : <Item 
              data={ item }
              selected={ selected }
              mapValue={ this.props.mapValue }
            />
        }
      </li>
    );
  }

  render(): JSX.Element {
    const { style, className } = this.props;
    const extraCss: Record<string, any> = { open: this.props.isOpen };

    let data: any[] = this.props.data || [];

    return (
      <div className={ Utils.className('ontime-select-popup', className, extraCss) } style={ style }>
        <div className="ontime-select-content">
          { data.length === 0 &&
            <div className="ontime-select-empty">
              <Icon value="frown-o" />
            </div>
          }
          <ul className="ontime-select-list" onClick={ this.onClick }>
            { data.map((item, idx) => this.renderItem(item, idx)) }
          </ul>
          { this.props.fetching && 
            <div className="ontime-select-spinner">
              <Icon value="spinner fa-spin" />
            </div> 
          }
        </div>
      </div>
    );
  }

}

export {
  List
};
