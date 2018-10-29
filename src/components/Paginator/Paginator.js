import React from 'react';
import { PureComponent, PropTypes } from '../../libs';
import Button from '../Button'

/**
 * Class Limit
 * 
 * @author Helen Gotovska
 */
export default class Limit extends PureComponent {

  static propTypes = {
    page: PropTypes.number,
    limit: PropTypes.number,
    total: PropTypes.number,
    count: PropTypes.number,
    onChange: PropTypes.func
  }

  static defaultProps = {
    page: 1,
    limit: 20,
    total: 0,
    count: 7
  }

  constructor(props) {
    super(props);

    this.state = {
      page: this.props.page
    };
  }

  setState(state) {
    return new Promise(resolve => super.setState(state, () => resolve()));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.state.page) {
      this.setState({page: nextProps.page});
    }
  }

  onClick(value) {
    this.setState({page: value});

    this.props.onChange && this.props.onChange(value);
  }

  prepareData() {
    const page = this.state.page;
    const limit = this.props.limit;
    const total = this.props.total;
    const pages = Math.ceil(total / limit);
    const pagin = [];

    let count = this.props.count;

    if (pages < count) {
      count = pages;
    }

    if (total > 0) {
      pagin.push({
        name: '«',
        page: 1,
        active: false
      });
      pagin.push({
        name: '‹',
        page: (page === 1),
        active: false
      });

      if (page <= count) {
        for (let i = 1; i <= count; i++) {
          pagin.push({
            name: i,
            page: i,
            active: (page === i)
          });
        }
      } else {
        let j;

        if (page > (pages - count + 1) && page > count) {
          j = pages - count;
        } else {
          j = page - Math.ceil(count / 2);
        }

        for (let i = 1; i <= count; i++) {
          j++;

          pagin.push({
            name: j,
            page: j,
            active: (page === j)
          });
        }
      }

      pagin.push({
        name: '›',
        page: (page === pages) ? pages : (page + 1),
        active: false
      });
      pagin.push({
        name: '»',
        page: pages,
        active: false
      });
    }

    return pagin;
  }

  render() {
    const data = this.prepareData();

    return (
      <div className={ this.className('ontime-paginator') } style={ this.style() }>
        <ul className="ontime-paginator-list">
          {
            data.map((v, idx) => {
              return (
                <Button 
                  key={ idx }
                  size="smaller"
                  kind={ (v.active ? 'default' : 'empty') }
                  disabled={ v.active }
                  label={ v.name.toString() } 
                  onClick={ () => this.onClick(v.page) } 
                />
              );
            })
          }
        </ul>
      </div>
    );
  }

}
