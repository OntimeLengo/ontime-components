import React from 'react';
import { shallow } from 'enzyme';
import { Label } from '../Label';

describe('<Label />', () => {
  it('To use "children" props', () => {
    const label = shallow(<Label>text here</Label>);

    expect(label.text()).toEqual('text here');
  });

  it('To use "value" props', () => {
    const label = shallow(<Label value="text here" />);

    expect(label.text()).toEqual('text here');
  });

  it('To use "required" props', () => {
    const label = shallow(<Label required={ true } value="text here" />);

    expect(label.text()).toEqual('text here*');

    expect(label.find('span.required')).toHaveLength(1);
  });

  it('has additional class', () => {
    const label = shallow(<Label className="label-test" value="text here" />);

    expect(label.hasClass('label-test')).toEqual(true);
  });
});
