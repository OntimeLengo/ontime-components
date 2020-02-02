import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Textarea } from '../Textarea';

describe('<Textarea />', () => {
  it('textarea', () => {
    const ta1 = shallow(<Textarea />);
    
    expect(ta1.find('textarea.ontime-textarea')).toHaveLength(1);
  });

  it('value', () => {
    const ta1 = shallow(<Textarea value="John Snow" />);
    const ta2 = shallow(<Textarea value={ 10 } />);
    const ta3 = shallow(<Textarea>John Snow</Textarea>);
    const ta4 = shallow(<Textarea>10</Textarea>);

    expect((ta1.instance() as any).value).toEqual('John Snow');
    expect((ta2.instance() as any).value).toEqual(10);
    expect((ta3.instance() as any).value).toEqual('John Snow');
    expect((ta4.instance() as any).value).toEqual('10');
  });

  it('placeholder, disabled, autoFucus', () => {
    const ta1 = shallow(<Textarea placeholder="placeholder" />);
    const ta2 = shallow(<Textarea disabled />);
    const ta3 = shallow(<Textarea autoFocus />);

    expect((ta1.instance() as any).props.placeholder).toEqual('placeholder');
    expect((ta2.instance() as any).props.disabled).toEqual(true);
    expect(ta2.find('.is-disabled')).toHaveLength(1);
    expect((ta3.instance() as any).props.autoFocus).toEqual(true);
  });

  it('label', () => {
    const ta1 = shallow(<Textarea label="label" />);
    const ta2 = shallow(<Textarea label="label" labelPosition="left" />);
    const ta3 = shallow(<Textarea label="label" labelPosition="right" />);
    const ta4 = shallow(<Textarea label="label" required />);

    expect((ta1.instance() as any).props.label).toEqual('label');
    expect((ta1.instance() as any).props.labelPosition).toEqual('top');
    expect((ta2.instance() as any).props.label).toEqual('label');
    expect((ta2.instance() as any).props.labelPosition).toEqual('left');
    expect((ta3.instance() as any).props.label).toEqual('label');
    expect((ta3.instance() as any).props.labelPosition).toEqual('right');
    expect((ta4.instance() as any).props.label).toEqual('label');
    expect((ta4.instance() as any).props.required).toEqual(true);
  });

  it('error', () => {
    const errors = ['1', '2', '3'];
    const ta1 = shallow(<Textarea errors={ errors } />);

    expect(ta1.find('.error')).toHaveLength(1);
    expect((ta1.instance() as any).props.errors).toHaveLength(3);
  });

  it('events', () => {
    const mockOnClick = sinon.spy();
    
    const ta1 = shallow(<Textarea onClick={ mockOnClick } />);

    ta1.find('textarea').simulate('click');
    
    expect(mockOnClick.calledOnce).toBe(true);
  });
});
