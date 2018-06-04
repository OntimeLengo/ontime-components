import React from 'react';
import { shallow } from 'enzyme';
import Notice from '../Notice';

describe('<Notice />', () => {
  it('default', () => {
    const notice = shallow(<Notice>text here</Notice>);

    expect(notice.text()).toEqual('text here');
  });
});
