import React from 'react';
import { PureComponent, PropTypes } from '../../libs';
import Button from '../Button';

/**
 * Class Limit
 * 
 * @author Helen Gotovska
 */
export default class Limit extends PureComponent {

  static propTypes = {
    limit: PropTypes.number,
    data: PropTypes.array,
    onChange: PropTypes.func
  }

  static defaultProps = {
    limit: 20,
    data: [5, 10, 20, 50, 100]
  }

  constructor(props) {
    super(props);

    this.state = {
      limit: this.props.limit
    };
  }

  setState(state) {
    return new Promise(resolve => super.setState(state, () => resolve()));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.limit !== this.state.limit) {
      this.setState({limit: nextProps.limit});
    }
  }

  onClick(value) {
    this.setState({limit: value});

    this.props.onChange && this.props.onChange(value);
  }

  render() {
    return (
      <div className={ this.className('ontime-limit') } style={ this.style() }>
        <ul className="ontime-limit-list">
          {
            this.props.data.map((v, idx) => {
              return (
                <Button 
                  key={ idx }
                  size="smaller"
                  kind={ (v === this.state.limit ? 'default' : 'empty') }
                  disabled={ v === this.state.limit }
                  label={ v.toString() } 
                  onClick={ () => this.onClick(v) } 
                />
              );
            })
          }
        </ul>
      </div>
    );
  }

}
