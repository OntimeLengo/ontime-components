import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Toggle from '../Toggle';

describe('<Toggle />', () => {
  it('label', () => {
    const toggle1 = shallow(<Toggle label="text here" />);
    const toggle2 = shallow(<Toggle />);
    const toggle3 = shallow(<Toggle>text here</Toggle>);

    expect(toggle1.find('span.ontime-toggle__label')).toHaveLength(1);
    expect(toggle2.find('span.ontime-toggle__label')).toHaveLength(0);
    expect(toggle3.find('span.ontime-toggle__label')).toHaveLength(1);
  });

  it('value', () => {
    const toggle1 = shallow(<Toggle value={ true } />);
    const toggle2 = shallow(<Toggle value={ false } />);

    expect(toggle1.find('.is-checked')).toHaveLength(1);
    expect(toggle2.find('.is-checked')).toHaveLength(0);
  });

  it('disabled', () => {
    const toggle1 = shallow(<Toggle disabled />);
    const toggle2 = shallow(<Toggle />);

    expect(toggle1.find('.is-disabled')).toHaveLength(1);
    expect(toggle2.find('.is-disabled')).toHaveLength(0);
  });

  it('events', () => {
    const mockOnClick = sinon.spy();
    
    const toggle1 = shallow(<Toggle onClick={ mockOnClick } />);

    toggle1.find('input').simulate('click');
    
    expect(mockOnClick.calledOnce).toBe(true);
  });
});
