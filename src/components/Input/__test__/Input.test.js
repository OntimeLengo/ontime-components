import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Input from '../Input';

describe('<Input />', () => {
  it('label', () => {
    // const toggle1 = shallow(<Input label="text here" />);
    // const toggle2 = shallow(<Input />);
    // const toggle3 = shallow(<Input>text here</Input>);

    // expect(toggle1.find('span.ontime-toggle__label')).toHaveLength(1);
    // expect(toggle2.find('span.ontime-toggle__label')).toHaveLength(0);
    // expect(toggle3.find('span.ontime-toggle__label')).toHaveLength(1);
  });

  // it('value', () => {
  //   const toggle1 = shallow(<Input value={ true } />);
  //   const toggle2 = shallow(<Input value={ false } />);

  //   expect(toggle1.find('.is-checked')).toHaveLength(1);
  //   expect(toggle2.find('.is-checked')).toHaveLength(0);
  // });

  // it('disabled', () => {
  //   const toggle1 = shallow(<Input disabled />);
  //   const toggle2 = shallow(<Input />);

  //   expect(toggle1.find('.is-disabled')).toHaveLength(1);
  //   expect(toggle2.find('.is-disabled')).toHaveLength(0);
  // });

  // it('events', () => {
  //   const mockOnClick = sinon.spy();
    
  //   const toggle1 = shallow(<Input onClick={ mockOnClick } />);

  //   toggle1.find('input').simulate('click');
    
  //   expect(mockOnClick.calledOnce).toBe(true);
  // });
});
