import React, { PureComponent } from 'react';
import { IProps } from '../../libs/interfaces';
import { TFuncClick } from '../../libs/types';
import { Utils } from '../../libs/Utils';
import { Button } from '../Button';

interface ILimitProps extends IProps {
  limit?: number;
  data?: number[];
  onChange?: Function;
}

interface ILimitDefProps {
  limit: number;
  data: number[];
}

interface ILimitState {
  limit: number;
}

/**
 * Class Limit
 */
class Limit extends PureComponent<ILimitProps & ILimitDefProps, ILimitState> {

  public static defaultProps: ILimitDefProps = {
    limit: 20,
    data: [5, 10, 20, 50, 100]
  };

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.limit === prevState.limit) {
      return {limit: nextProps.limit};
    }

    return null;
  }

  constructor(props: ILimitProps & ILimitDefProps) {
    super(props);

    this.state = {
      limit: this.props.limit
    };
  }

  onClick: TFuncClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    const $el: HTMLElement = e.currentTarget;

    if ($el && $el.dataset && $el.dataset.value) {
      const value: number = parseInt($el.dataset.value);

      if (this.props.data.includes(value)) {
        this.setState({limit: value});

        if (this.props.onChange) {
          this.props.onChange(value);
        }
      }
    }
  };

  setState(state: ILimitState) {
    return new Promise(resolve => super.setState(state, () => resolve()));
  }

  render() {
    return (
      <div className={ Utils.className('ontime-limit', this.props.className) } style={ this.props.style }>
        <ul className="ontime-limit-list">
          {
            this.props.data.map((v: number) => {
              const key = v.toString();

              return (
                <Button 
                  key={ key }
                  dataValue={ key }
                  size="smaller"
                  kind={ (v === this.state.limit ? 'default' : 'empty') }
                  disabled={ v === this.state.limit }
                  label={ key } 
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
  Limit,
  ILimitProps,
  ILimitDefProps,
  ILimitState
};
