import React from 'react';
import { PureComponent, PropTypes } from '../../libs';
import Item from './Item';
import Icon from '../Icon'

/**
 * Class List
 * 
 * @author Dmytro Hotovskyi
 * @created 10/05/2018
 */
export default class List extends PureComponent {

  static propTypes = {
    data: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    multiple: PropTypes.bool,
    value: PropTypes.any,
    customItemTpl: PropTypes.func,
    mapValue: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    isOpen: PropTypes.bool,
    fetching: PropTypes.bool
  }

  onClick(e) {
    let el = e.target;
    let ul = e.currentTarget;

    for (let i = 0; ul.children[i]; i++) {
      let li = ul.children[i];

      if ((el === li) || li.contains(el)) {
        const at = parseInt(li.dataset.at);
    
        if (this.props.data[at]) {
          this.props.onClick(this.props.data[at]);
        }

        break;
      }
    }
  }

  renderItem(item, idx) {
    const strIdx = idx.toString();

    let content, selected;

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
        className="ontime-select-item" 
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

  render() {
    let extraCss = {open: this.props.isOpen};

    return (
      <div className={ this.className('ontime-select-popup', extraCss) }>
        <div className="ontime-select-content">
          { this.props.data.length === 0 &&
            <div className="ontime-select-empty">
              <Icon value="frown-o" />
            </div>
          }
          <ul className="ontime-select-list" onClick={ this.onClick.bind(this) }>
            { this.props.data.map((item, idx) => this.renderItem(item, idx)) }
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