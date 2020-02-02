interface IStyle {
  [key: string]: string | number;
}

interface IProps {
  key?: string;
  className?: string;
  style?: IStyle;
  dataValue?: string;
}

interface IState {

}

export {
  IStyle,
  IProps,
  IState
};
