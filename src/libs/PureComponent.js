import { PureComponent as ReactPureComponent } from 'react';
import PropTypes from './PropTypes';

export default class PureComponent extends ReactPureComponent {
  
  static propTypes = {
    className: PropTypes.string
  }

  className(...args) {
    let classes = [];

    args.reduce((acc, item) => {
      if (item) {
        if (typeof item === 'string') {
          item && acc.push(item);
        } else if (Array.isArray(item)) {
          item.forEach(i => {
            i && acc.push(i);
          });
        } else if (typeof item === 'object') {
          Object.keys(item).forEach(k => {
            (k && item[k]) && acc.push(k);
          });
        }
      }

      return acc;
    }, classes);

    if (this.props.className) {
      classes.push(this.props.className);
    }

    return classes.join(' ');
  }

  style(style = {}) {
    return Object.assign({}, this.props.style, style);
  }

}
