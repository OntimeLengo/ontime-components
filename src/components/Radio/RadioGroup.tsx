import React, { Component } from 'react';
import { IProps, IState } from '../../libs/interfaces';
import { Utils } from '../../libs/Utils';
import { Label } from '../Label';
import { Button, TSize } from '../Button'
import { InputErrors, TError } from '../InputErrors';
import { Radio } from './Radio';

type TLabelPosition = 'top' | 'left' | 'right';
type TKind = 'radio' | 'button';
type TPosition = 'row' | 'column';

interface IRadioGroupProps extends IProps {
  label?: string;
  labelPosition?: TLabelPosition;
  required?: boolean;
  name?: string;
  kind?: TKind;
  position?: TPosition;
  size?: TSize;
  data?: any[];
  mapValue?: string | Function;
  errors?: TError[] | null;
  onClick?: Function;
  onBlur?: Function;
  onChange?: Function;
  value?: string | number | any;
}

interface IRadioGroupDefProps {
  labelPosition: TLabelPosition;
  position: TPosition;
  kind: TKind;
  size: TSize;
  data: any[];
}

interface IRadioGroupState extends IState {
  value: boolean;
}

/**
 * Class RadioGroup
 */
class RadioGroup extends Component<IRadioGroupProps & IRadioGroupDefProps, IRadioGroupState> {

  public static defaultProps: IRadioGroupDefProps = {
    labelPosition: 'top',
    position: 'row',
    kind: 'radio',
    size: 'medium',
    data: []
  };

  readonly state: IRadioGroupState;

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.value === prevState.value) {
      return {value: nextProps.value};
    }

    return null;
  }

  constructor(props: IRadioGroupProps & IRadioGroupDefProps) {
    super(props);

    this.state = {
      value: this.props.value
    };
  }

  get value() {
    return this.state.value;
  }

  set value(value) {
    this.setState({ value });
  }

  setState(state: IRadioGroupState) {
    return new Promise(resolve => super.setState(state, () => resolve()));
  }

  onClick(value: string | number | any, e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (this.props.onClick) {
      this.props.onClick(value, e);
    }
  }

  onChange(value: string | number | any): void {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  onBlur(value: string | number | any) {
    if (this.props.onBlur) {
      this.props.onBlur(value);
    }

    this.setState({ value });
  }

  renderLabel(): JSX.Element {
    let className: string = '';

    if (this.props.labelPosition === 'top') {
      className = 'ontime-input-label_top';
    }

    return (
      <Label 
        className={ className }
        value={ this.props.label } 
        required={ this.props.required } 
      />
    );
  }

  renderErrors(): JSX.Element | null {
    return this.props.errors ? (<InputErrors value={ this.props.errors } />) : null;
  }

  renderRadio(value: any, idx: number): JSX.Element {
    let label;

    if (typeof value === 'string') {
      label = value;
    } else if (!Array.isArray(value) && typeof value === 'object') {
      if (this.props.mapValue) {
        if (typeof this.props.mapValue === 'function') {
          label = this.props.mapValue(value) || '';
        } else {
          label = value[this.props.mapValue] || '';
        }
      } else {
        label = value.name;
      }
    } else {
      throw new Error('RadioGroup: Incorrect value type. It should be string or object');
    }

    if (this.props.kind === 'radio') {
      return (
        <Radio 
          key={ idx.toString() }
          label={ label }
          value={ (value === this.state.value) } 
          onClick={ async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            await this.setState({ value });
  
            this.onClick(value, e);
            this.onChange(value);
            this.onBlur(value);
          } }
        />
      );
    } else if (this.props.kind === 'button') {
      return (
        <Button 
          key={ idx.toString() }
          label={ label }
          primary={ (value === this.state.value) }
          kind={ (value === this.state.value) ? 'default' : 'ghost' } 
          size={ this.props.size }
          onClick={ async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            await this.setState({ value });
  
            this.onClick(value, e);
            this.onChange(value);
            this.onBlur(value);
          } }
        />
      );
    } else {
      throw new Error('RadioGroup: Unknown type ' + this.props.kind);
    }
  }

  renderInput(): JSX.Element {
    const { style, className } = this.props;
    const extraCss: any = { buttons: (this.props.kind === 'button') };

    extraCss[this.props.position] = true;

    return (
      <div className={ Utils.className('ontime-radiogroup', className, extraCss) } style={ style }>
        { this.props.data.map((value, idx) => this.renderRadio(value, idx)) }
      </div>
    );
  }

  render(): JSX.Element {
    if (this.props.label) {
      if (this.props.labelPosition === 'top') {
        return (
          <React.Fragment>
            { this.renderLabel() }
            { this.renderInput() }
            { this.renderErrors() }
          </React.Fragment>
        );
      } else if (this.props.labelPosition === 'left') {
        return (
          <div className="ontime-wrapinput">
            <div className="ontime-wrapinput-label">
              { this.renderLabel() }
            </div>
            <div className="ontime-wrapinput-input">
              { this.renderInput() }
              { this.renderErrors() }
            </div>
          </div>
        );
      } else if (this.props.labelPosition === 'right') {
        return (
          <div className="ontime-wrapinput">
            <div className="ontime-wrapinput-input">
              { this.renderInput() }
              { this.renderErrors() }
            </div>
            <div className="ontime-wrapinput-label is-right">
              { this.renderLabel() }
            </div>
          </div>
        );
      } else {
        throw new Error('Input: unknown label position');
      }
    } else {
      return (
        <React.Fragment>
          { this.renderInput() }
          { this.renderErrors() }
        </React.Fragment>
      );
    }
  }

}

export {
  RadioGroup,
  IRadioGroupProps,
  IRadioGroupState,
  TLabelPosition,
  TKind,
  TPosition
};
