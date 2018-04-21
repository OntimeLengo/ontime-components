import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Icon from '../Icon';

describe('<Icon />', () => {
  it('has classes', () => {
    const icon = shallow(<Icon value="user" className="custom-icon" />);

    expect(icon.hasClass('ontime-icon')).toEqual(true);
    expect(icon.hasClass('fa')).toEqual(true);
    expect(icon.hasClass('fa-user')).toEqual(true);
    expect(icon.hasClass('custom-icon')).toEqual(true);
  });

  it('has size', () => {
    const icon = shallow(<Icon value="user" size="2x" />);

    expect(icon.hasClass('fa-2x')).toEqual(true);
  });

  it('has click', () => {
    const mockOnClick = sinon.spy();
    const icon = shallow(<Icon value="user" onClick={ mockOnClick } />);

    icon.find('i').simulate('click');

    expect(mockOnClick.calledOnce).toBe(true);
  });
});
