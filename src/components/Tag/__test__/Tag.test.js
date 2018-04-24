import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Tag from '../Tag';

describe('<Tag />', () => {
  it('default', () => {
    const tag1 = shallow(<Tag value="tag" />);
    
    expect(tag1.find('span.ontime-tag')).toHaveLength(1);
  });

  it('value, isClosable', () => {
    const tag1 = shallow(<Tag value="John Snow" />);
    const tag2 = shallow(<Tag value="John Snow" isClosable={ false } />);

    expect(tag1.text()).toEqual('John Snow<Icon />');
    expect(tag2.find('Icon')).toHaveLength(0);
  });

  it('events', () => {
    const mockOnClick = sinon.spy();
    const mockOnDblClick = sinon.spy();
    
    const tag1 = shallow(<Tag value="tag" onClick={ mockOnClick } />);
    const tag2 = shallow(<Tag value="tag" onDoubleClick={ mockOnDblClick } />);

    tag1.find('span').simulate('click');
    tag2.find('span').simulate('doubleClick');
    
    expect(mockOnClick.calledOnce).toBe(true);
    expect(mockOnDblClick.calledOnce).toBe(true);
  });
});
