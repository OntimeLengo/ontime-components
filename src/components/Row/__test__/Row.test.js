import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Row from '../Row';
import Input from '../../Input';

describe('<Row />', () => {
  it('default', () => {
    const row = shallow(<Row></Row>);

    expect(Array.isArray(row.instance().props.sizes)).toEqual(true);
    expect(Array.isArray(row.instance().props.children)).toEqual(true);
  });

  it('with elements', () => {
    const row = shallow(
      <Row>
        <Input />
        <Input />
        <Input />
      </Row>
    );

    expect(row.instance().props.children.length).toEqual(3);
  });

  it('with elements and sizes', () => {
    const row = shallow(
      <Row sizes={ [2, 4, 6] }>
        <Input />
        <Input />
        <Input />
      </Row>
    );

    expect(row.instance().props.sizes.length).toEqual(3);
  });
});
