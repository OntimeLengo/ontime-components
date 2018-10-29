import React from 'react';
import { shallow } from 'enzyme';
import Text from '../Text';

describe('<Text />', () => {
  it('default', () => {
    const txt1 = shallow(<Text value="John Snow" />);
    const txt2 = shallow(<Text>John Snow</Text>);
    
    expect(txt1.find('p.ontime-text')).toHaveLength(1);
    expect(txt1.text()).toEqual('John Snow');
    expect(txt2.text()).toEqual('John Snow');
  });

  it('strong', () => {
    const txt1 = shallow(<Text value="John Snow" strong />);

    expect(txt1.find('p strong')).toHaveLength(1);
  });
});
