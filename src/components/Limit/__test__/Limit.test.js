import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Limit from '../Limit';

describe('<Limit />', () => {
  it('default', () => {
    const limit = mount(<Limit />);

    expect(limit.find('div.ontime-limit')).toHaveLength(1);
    expect(limit.find('div.ontime-limit button')).toHaveLength(5);
  });

  it('onChange', () => {
    const mockOnClick = sinon.spy();
    const limit = mount(<Limit onChange={ mockOnClick } />);

    limit.find('div.ontime-limit button').first().simulate('click');

    expect(mockOnClick.calledOnce).toBe(true);
  });
});
