import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Checkbox from '../Checkbox';

describe('<Button />', () => {
  it('type', () => {
    const check1 = shallow(<Checkbox type="button" />);
    const check2 = shallow(<Checkbox />);

    expect(check1.find('.is-button')).toHaveLength(1);
    expect(check2.find('.is-button')).toHaveLength(0);
  });

  it('label', () => {
    const check1 = shallow(<Checkbox label="text here" />);
    const check2 = shallow(<Checkbox />);
    const check3 = shallow(<Checkbox>text here</Checkbox>);

    expect(check1.find('span.ontime-checkbox__label')).toHaveLength(1);
    expect(check2.find('span.ontime-checkbox__label')).toHaveLength(0);
    expect(check3.find('span.ontime-checkbox__label')).toHaveLength(1);
  });

  it('value', () => {
    const check1 = shallow(<Checkbox value={ true } />);
    const check2 = shallow(<Checkbox value={ false } />);

    expect(check1.find('.is-checked')).toHaveLength(1);
    expect(check2.find('.is-checked')).toHaveLength(0);
  });

  it('disabled', () => {
    const check1 = shallow(<Checkbox disabled />);
    const check2 = shallow(<Checkbox />);

    expect(check1.find('.is-disabled')).toHaveLength(1);
    expect(check2.find('.is-disabled')).toHaveLength(0);
  });

  it('events', () => {
    const mockOnClick = sinon.spy();
    
    const check1 = shallow(<Checkbox onClick={ mockOnClick } />);

    check1.find('input').simulate('click');
    
    expect(mockOnClick.calledOnce).toBe(true);
  });
});
