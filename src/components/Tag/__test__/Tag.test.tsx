import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Tag } from '../Tag';

describe('<Tag />', () => {
  it('default', () => {
    const tag1 = shallow(<Tag value="tag" />);
    
    expect(tag1.find('span.ontime-tag')).toHaveLength(1);
  });

  it('value, isClosable', () => {
    const tag1 = shallow(<Tag value="John Snow" />);
    const tag2 = shallow(<Tag value="John Snow" isClosable={ false } />);
    const tag3 = shallow(<Tag value={ {name: 'John Snow'} } mapValue="name" />);
    const tag4 = shallow(<Tag value={ {name: 'John Snow'} } mapValue={ (v: any) => v.name } />);

    expect(tag1.text()).toEqual('John Snow<Icon />');
    expect(tag2.find('Icon')).toHaveLength(0);
    expect(tag3.text()).toEqual('John Snow<Icon />');
    expect(tag4.text()).toEqual('John Snow<Icon />');
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
