import React, { PureComponent } from 'react';
import { IProps, IState } from '../../libs/interfaces';
import { TFuncClick } from '../../libs/types';
import { Utils } from '../../libs/Utils';
import { Button } from '../Button';

interface IPaginatorProps extends IProps {
  page?: number;
  limit?: number;
  total?: number;
  count?: number;
  onChange?: Function;
}

interface IPaginatorDefProps {
  page: number;
  limit: number;
  total: number;
  count: number;
}

interface IPaginatorState extends IState {
  page: number;
}

interface IPagin {
  name: string;
  page: number;
  active: boolean;
}

/**
 * Class Paginator
 */
class Paginator extends PureComponent<IPaginatorProps & IPaginatorDefProps, IPaginatorState> {

  public static defaultProps: IPaginatorDefProps = {
    page: 1,
    limit: 20,
    total: 0,
    count: 7
  };

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.page === prevState.page) {
      return {page: nextProps.page};
    }

    return null;
  }

  onClick: TFuncClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    const $el: HTMLElement = e.currentTarget;

    if ($el && $el.dataset && $el.dataset.value) {
      const value: number = parseInt($el.dataset.value);

      this.setState({page: value});

      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  };

  constructor(props: IPaginatorProps & IPaginatorDefProps) {
    super(props);

    this.state = {
      page: this.props.page
    };
  }

  setState(state: IPaginatorState) {
    return new Promise(resolve => super.setState(state, () => resolve()));
  }

  prepareData(): IPagin[] {
    const page: number = this.state.page;
    const limit: number = this.props.limit;
    const total: number = this.props.total;
    const pages: number = Math.ceil(total / limit);
    const pagin: IPagin[] = [];

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
        page: (page === 1) ? 1 : page - 1,
        active: false
      });

      if (page <= count) {
        for (let i = 1; i <= count; i++) {
          pagin.push({
            name: i.toString(),
            page: i,
            active: (page === i)
          });
        }
      } else {
        let j: number;

        if (page > (pages - count + 1) && page > count) {
          j = pages - count;
        } else {
          j = page - Math.ceil(count / 2);
        }

        for (let i = 1; i <= count; i++) {
          j++;

          pagin.push({
            name: j.toString(),
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
    const data: IPagin[] = this.prepareData();

    return (
      <div 
        className={ Utils.className('ontime-paginator', this.props.className) } 
        style={ this.props.style }
      >
        <ul className="ontime-paginator-list">
          {
            data.map((v: IPagin, idx: number) => {
              return (
                <Button 
                  key={ idx.toString() }
                  size="smaller"
                  dataValue={ v.page.toString() }
                  kind={ (v.active ? 'default' : 'empty') }
                  disabled={ v.active }
                  label={ v.name } 
                  onClick={ this.onClick } 
                />
              );
            })
          }
        </ul>
      </div>
    );
  }

}

export {
  Paginator,
  IPaginatorProps,
  IPaginatorDefProps,
  IPaginatorState
};
