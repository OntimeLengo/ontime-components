import React, { PureComponent } from 'react';
import { IProps } from '../../libs/interfaces';
import { Utils } from '../../libs/Utils';

type TH = 'left' | 'center' | 'right';
type TV = 'top' | 'middle' | 'bottom';
type TDirection = 'row' | 'column';

interface IContainerProps extends IProps {
  h?: TH;
  v?: TV;
  direction?: TDirection;
  full?: boolean;
  space?: number;
  spaceUnits?: string;
  children?: any;
}

interface IContainerDefProps {
  h: TH;
  v: TV;
  direction: TDirection;
  spaceUnits: string;
  full: boolean;
}

/**
 * Class Container
 */
class Container extends PureComponent<IContainerProps & IContainerDefProps> {

  static defaultProps: IContainerDefProps = {
    direction: 'row',
    h: 'left',
    v: 'top',
    spaceUnits: 'px',
    full: true
  }

  getChildren(): JSX.Element[] {
    let children: any[] = React.Children.toArray(this.props.children);

    if (this.props.space) {
      const space = {marginLeft: this.props.space + this.props.spaceUnits};

      children = children.map((child, idx) => {
        if (idx > 0) {
          return React.cloneElement(child, {
            key: child.props.key || ('k-' + idx),
            style: {...space, ...child.props.style}
          });
        } else {
          return React.cloneElement(child, {key: child.props.key || ('k-' + idx)});
        }
      });
    }

    return children;
  }

  render(): JSX.Element {
    const { className, style } = this.props;
    const extraClass: any = {};

    extraClass[this.props.h] = true;
    extraClass[this.props.v] = true;
    extraClass[this.props.direction] = true;
    
    extraClass.full = this.props.full;

    return (
      <div className={ Utils.className('ontime-container', className, extraClass) } style={ style }>
        { this.getChildren() }
      </div>
    );
  }

}

export {
  Container,
  TH,
  TV,
  TDirection,
  IContainerProps
};
