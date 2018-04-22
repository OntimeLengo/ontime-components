import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Input from '../Input';

describe('<Input />', () => {
  it('input', () => {
    const inp1 = shallow(<Input />);
    
    expect(inp1.find('input[type="text"]')).toHaveLength(1);
  });

  it('value', () => {
    const inp1 = shallow(<Input value="John Snow" />);
    const inp2 = shallow(<Input type="number" value={ 10 } />);

    expect(inp1.instance().value).toEqual('John Snow');
    expect(inp2.instance().value).toEqual(10);
  });

  it('placeholder, disabled, autoFucus', () => {
    const inp1 = shallow(<Input placeholder="placeholder" />);
    const inp2 = shallow(<Input disabled />);
    const inp3 = shallow(<Input autoFocus />);

    expect(inp1.find('.ontime-input-input').props().placeholder).toEqual('placeholder');
    expect(inp2.find('.ontime-input-input').props().disabled).toEqual(true);
    expect(inp2.find('.is-disabled')).toHaveLength(1);
    expect(inp3.find('.ontime-input-input').props().autoFocus).toEqual(true);
  });

  it('label', () => {
    const inp1 = shallow(<Input label="label" />);
    const inp2 = shallow(<Input label="label" labelPosition="left" />);
    const inp3 = shallow(<Input label="label" labelPosition="right" />);
    const inp4 = shallow(<Input label="label" required />);

    expect(inp1.instance().props.label).toEqual('label');
    expect(inp1.instance().props.labelPosition).toEqual('top');
    expect(inp2.instance().props.label).toEqual('label');
    expect(inp2.instance().props.labelPosition).toEqual('left');
    expect(inp3.instance().props.label).toEqual('label');
    expect(inp3.instance().props.labelPosition).toEqual('right');
    expect(inp4.instance().props.label).toEqual('label');
    expect(inp4.instance().props.required).toEqual(true);
  });

  it('type', () => {
    const inp1 = shallow(<Input />);
    const inp2 = shallow(<Input type="number" />);
    const inp3 = shallow(<Input type="password" />);
    const inp4 = shallow(<Input type="email" />);

    expect(inp1.find('input[type="text"]')).toHaveLength(1);
    expect(inp2.find('input[type="number"]')).toHaveLength(1);
    expect(inp3.find('input[type="password"]')).toHaveLength(1);
    expect(inp4.find('input[type="email"]')).toHaveLength(1);
  });

  it('size', () => {
    const inp1 = shallow(<Input size="smaller" />);
    const inp2 = shallow(<Input size="small" />);
    const inp3 = shallow(<Input size="medium" />);
    const inp4 = shallow(<Input size="large" />);

    expect(inp1.find('.smaller')).toHaveLength(1);
    expect(inp2.find('.small')).toHaveLength(1);
    expect(inp3.find('.medium')).toHaveLength(1);
    expect(inp4.find('.large')).toHaveLength(1);
  });

  it('icon', () => {
    const inp1 = shallow(<Input leftIcon="user" />);
    const inp2 = shallow(<Input rightIcon="at" />);
    const inp3 = shallow(<Input leftIcon="user" rightIcon="at" />);

    expect(inp1.instance().props.leftIcon).toEqual('user');
    expect(inp2.instance().props.rightIcon).toEqual('at');
    expect(inp3.instance().props.leftIcon).toEqual('user');
    expect(inp3.instance().props.rightIcon).toEqual('at');
  });

  it('error', () => {
    const errors = ['1', '2', '3'];
    const inp1 = shallow(<Input errors={ errors } />);

    expect(inp1.find('.error')).toHaveLength(1);
    expect(inp1.instance().props.errors).toHaveLength(3);
  });

  it('events', () => {
    const mockOnClick = sinon.spy();
    
    const inp1 = shallow(<Input onClick={ mockOnClick } />);

    inp1.find('input').simulate('click');
    
    expect(mockOnClick.calledOnce).toBe(true);
  });
});
