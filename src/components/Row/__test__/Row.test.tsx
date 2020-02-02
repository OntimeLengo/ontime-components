import React from 'react';
import { shallow } from 'enzyme';
import { Row } from '../Row';
import { Input } from '../../Input';

describe('<Row />', () => {
  it('default', () => {
    const row = shallow(<Row></Row>);

    const inst: any = row.instance();

    expect(Array.isArray(inst.props.sizes)).toEqual(true);
    expect(Array.isArray(inst.props.children)).toEqual(true);
  });

  it('with elements', () => {
    const row = shallow(
      <Row>
        <Input />
        <Input />
        <Input />
      </Row>
    );

    const inst: any = row.instance();

    expect(inst.props.children.length).toEqual(3);
  });

  it('with elements and sizes', () => {
    const row = shallow(
      <Row sizes={ [2, 4, 6] }>
        <Input />
        <Input />
        <Input />
      </Row>
    );

    const inst: any = row.instance();

    expect(inst.props.sizes.length).toEqual(3);
  });
});
