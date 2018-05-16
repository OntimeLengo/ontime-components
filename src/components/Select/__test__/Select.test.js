import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Select from '../Select';

describe('<Select />', () => {
  it('select', () => {
    const sel1 = shallow(<Select dataSource={ async () => [] } />);
    
    expect(sel1.find('input.ontime-input-input')).toHaveLength(1);
  });

  it('dataSource, autoFetch, mapValue, customItemTpl', () => {
    const sel1 = shallow(<Select dataSource={ async () => [] } />);
    const sel2 = shallow(<Select autoFetch dataSource={ async () => [] } />);
    const sel3 = shallow(<Select mapValue="name" dataSource={ async () => [] } />);
    const sel4 = shallow(<Select customItemTpl={ () => {} } dataSource={ async () => [] } />);

    expect(typeof sel1.instance().props.dataSource).toEqual('function');
    expect(sel2.instance().props.autoFetch).toEqual(true);
    expect(sel3.instance().props.mapValue).toEqual('name');
    expect(typeof sel4.instance().props.customItemTpl).toEqual('function');
  });

  it('value', () => {
    const value = [{name: 'John Snow'}];
    const sel1 = shallow(<Select value="John Snow" dataSource={ async () => [] } />);
    const sel2 = shallow(<Select value={ value } dataSource={ async () => [] } />);

    expect(sel1.instance().value).toEqual('John Snow');
    expect(sel2.instance().value).toEqual(value);
  });

  it('placeholder, disabled, autoFucus', () => {
    const sel1 = shallow(<Select placeholder="placeholder" dataSource={ async () => [] } />);
    const sel2 = shallow(<Select disabled dataSource={ async () => [] } />);
    const sel3 = shallow(<Select autoFocus dataSource={ async () => [] } />);

    expect(sel1.find('.ontime-input-input').props().placeholder).toEqual('placeholder');
    expect(sel2.instance().props.disabled).toEqual(true);
    expect(sel2.find('.is-disabled')).toHaveLength(1);
    expect(sel3.find('.ontime-input-input').props().autoFocus).toEqual(true);
  });

  it('label', () => {
    const sel1 = shallow(<Select dataSource={ async () => [] } label="label" />);
    const sel2 = shallow(<Select dataSource={ async () => [] } label="label" labelPosition="left" />);
    const sel3 = shallow(<Select dataSource={ async () => [] } label="label" labelPosition="right" />);
    const sel4 = shallow(<Select dataSource={ async () => [] } label="label" required />);

    expect(sel1.instance().props.label).toEqual('label');
    expect(sel1.instance().props.labelPosition).toEqual('top');
    expect(sel2.instance().props.label).toEqual('label');
    expect(sel2.instance().props.labelPosition).toEqual('left');
    expect(sel3.instance().props.label).toEqual('label');
    expect(sel3.instance().props.labelPosition).toEqual('right');
    expect(sel4.instance().props.label).toEqual('label');
    expect(sel4.instance().props.required).toEqual(true);
  });

  it('size', () => {
    const sel1 = shallow(<Select dataSource={ async () => [] } size="smaller" />);
    const sel2 = shallow(<Select dataSource={ async () => [] } size="small" />);
    const sel3 = shallow(<Select dataSource={ async () => [] } size="medium" />);
    const sel4 = shallow(<Select dataSource={ async () => [] } size="large" />);

    expect(sel1.find('.smaller')).toHaveLength(1);
    expect(sel2.find('.small')).toHaveLength(1);
    expect(sel3.find('.medium')).toHaveLength(1);
    expect(sel4.find('.large')).toHaveLength(1);
  });

  it('error', () => {
    const errors = ['1', '2', '3'];
    const sel1 = shallow(<Select dataSource={ async () => [] } errors={ errors } />);

    expect(sel1.find('.error')).toHaveLength(1);
    expect(sel1.instance().props.errors).toHaveLength(3);
  });

  it('events', () => {
    const mockOnClick = sinon.spy();
    
    const sel1 = shallow(<Select dataSource={ async () => [] } onClick={ mockOnClick } />);

    sel1.find('.ontime-input-input').simulate('click');
    
    expect(mockOnClick.calledOnce).toBe(true);
  });
});
