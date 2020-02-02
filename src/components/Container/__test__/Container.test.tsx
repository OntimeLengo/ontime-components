import React from 'react';
import { shallow } from 'enzyme';
import { Container } from '../Container';

describe('<Container />', () => {
  it('left, center, right', () => {
    const cont1 = shallow(<Container />);
    const cont2 = shallow(<Container h="center" />);
    const cont3 = shallow(<Container h="right" />);

    expect(cont1.find('.left')).toHaveLength(1);
    expect(cont2.find('.center')).toHaveLength(1);
    expect(cont3.find('.right')).toHaveLength(1);
  });

  it('top, middle, bottom', () => {
    const cont1 = shallow(<Container />);
    const cont2 = shallow(<Container v="middle" />);
    const cont3 = shallow(<Container v="bottom" />);

    expect(cont1.find('.top')).toHaveLength(1);
    expect(cont2.find('.middle')).toHaveLength(1);
    expect(cont3.find('.bottom')).toHaveLength(1);
  });

  it('space', () => {
    const cont1 = shallow(<Container space={ 20 } />);
    const inst: any = cont1.instance();

    expect(inst.props.space).toEqual(20);
    expect(inst.props.spaceUnits).toEqual('px');
  });
});
