import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { Paginator } from '../Paginator';

describe('<Paginator />', () => {
  it('default', () => {
    const pag = mount(<Paginator total={ 1000 } />);

    expect(pag.find('div.ontime-paginator')).toHaveLength(1);
    expect(pag.find('div.ontime-paginator button')).toHaveLength(11);
  });

  it('onChange', () => {
    const mockOnClick = sinon.spy();
    const pag = mount(<Paginator total={ 1000 } onChange={ mockOnClick } />);

    pag.find('div.ontime-paginator button').first().simulate('click');

    expect(mockOnClick.calledOnce).toBe(true);
  });
});
