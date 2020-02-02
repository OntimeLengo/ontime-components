import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Radio } from '../Radio';

describe('<Radio />', () => {
  it('label', () => {
    const radio1 = shallow(<Radio label="text here" />);
    const radio2 = shallow(<Radio />);
    const radio3 = shallow(<Radio>text here</Radio>);

    expect(radio1.find('span.ontime-radio__label')).toHaveLength(1);
    expect(radio2.find('span.ontime-radio__label')).toHaveLength(0);
    expect(radio3.find('span.ontime-radio__label')).toHaveLength(1);
  });

  it('value', () => {
    const radio1 = shallow(<Radio value={ true } />);
    const radio2 = shallow(<Radio value={ false } />);

    expect(radio1.find('.is-checked')).toHaveLength(1);
    expect(radio2.find('.is-checked')).toHaveLength(0);
  });

  it('disabled', () => {
    const radio1 = shallow(<Radio disabled />);
    const radio2 = shallow(<Radio />);

    expect(radio1.find('.is-disabled')).toHaveLength(1);
    expect(radio2.find('.is-disabled')).toHaveLength(0);
  });

  it('events', () => {
    const mockOnClick = sinon.spy();
    
    const radio1 = shallow(<Radio onClick={ mockOnClick } />);

    radio1.find('input').simulate('click');
    
    expect(mockOnClick.calledOnce).toBe(true);
  });
});
