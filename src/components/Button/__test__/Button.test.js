import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from '../Button';

describe('<Button />', () => {
  it('label', () => {
    const button1 = shallow(<Button label="text here" />);
    const button2 = shallow(<Button />);

    expect(button1.find('span.ontime-button-label')).toHaveLength(1);
    expect(button2.find('span.ontime-button-label')).toHaveLength(0);
  });

  it('leftIcon rightIcon', () => {
    const button1 = shallow(<Button label="text here" leftIcon="user" />);
    const button2 = shallow(<Button label="text here" rightIcon="user" />);
    const button3 = shallow(<Button leftIcon="user" />);

    expect(button1.find('.ontime-button-left_icon')).toHaveLength(1);
    expect(button2.find('.ontime-button-right_icon')).toHaveLength(1);
    expect(button3.find('Icon')).toHaveLength(1);
  });

  it('type', () => {
    const button1 = shallow(<Button type="button" />);
    const button2 = shallow(<Button type="submit" />);

    expect(button1.prop('type')).toEqual('button');
    expect(button2.prop('type')).toEqual('submit');
  });

  it('primary', () => {
    const button1 = shallow(<Button primary />);
    const button2 = shallow(<Button />);
    
    expect(button1.find('button.primary')).toHaveLength(1);
    expect(button2.find('button.common')).toHaveLength(1);
  });

  it('kind', () => {
    const button1 = shallow(<Button kind="default" />);
    const button2 = shallow(<Button kind="primary" />);
    const button3 = shallow(<Button kind="success" />);
    const button4 = shallow(<Button kind="danger" />);
    const button5 = shallow(<Button kind="warning" />);
    const button6 = shallow(<Button kind="ghost" />);
    
    expect(button1.find('button.default')).toHaveLength(1);
    expect(button2.find('button.primary')).toHaveLength(1);
    expect(button3.find('button.success')).toHaveLength(1);
    expect(button4.find('button.danger')).toHaveLength(1);
    expect(button5.find('button.warning')).toHaveLength(1);
    expect(button6.find('button.ghost')).toHaveLength(1);
  });

  it('size', () => {
    const button1 = shallow(<Button size="medium" />);
    const button2 = shallow(<Button size="large" />);
    const button3 = shallow(<Button size="small" />);
    const button4 = shallow(<Button size="smaller" />);
    
    expect(button1.find('button.medium')).toHaveLength(1);
    expect(button2.find('button.large')).toHaveLength(1);
    expect(button3.find('button.small')).toHaveLength(1);
    expect(button4.find('button.smaller')).toHaveLength(1);
  });

  it('loading', () => {
    const button = shallow(<Button loading />);
    
    expect(button.find('.fa-spin')).toHaveLength(1);
  });

  it('disabled', () => {
    const button = shallow(<Button disabled />);

    expect(button.prop('disabled')).toEqual(true);
    expect(button.find('button.is-disabled')).toHaveLength(1);
  });

  it('onClick', () => {
    const mockOnClick = sinon.spy();
    const button = shallow(<Button onClick={ mockOnClick } />);

    button.find('button').simulate('click');

    expect(mockOnClick.calledOnce).toBe(true);
  });
});
