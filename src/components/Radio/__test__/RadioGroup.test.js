import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import RadioGroup from '../RadioGroup';

describe('<RadioGroup />', () => {
  const data = [
    {id: '1', name: 'name 1'},
    {id: '2', name: 'name 2'},
    {id: '3', name: 'name 3'},
  ];

  it('container', () => {
    const rg1 = shallow(<RadioGroup data={ data } label="text here" />);

    expect(rg1.find('div.ontime-radiogroup')).toHaveLength(1);
  });
});
