import React from 'react';
import { shallow } from 'enzyme';
import { InputErrors } from '../InputErrors';

describe('<InputErrors />', () => {
  it('has classes', () => {
    const errors = [
      'err 1',
      new Error('err 2'),
      {name: 'err 3'},
      {message: 'err 3'}
    ];

    const icon = shallow(<InputErrors value={ errors } />);

    expect(icon.hasClass('ontime-input_errors')).toEqual(true);
    expect(icon.find('p.ontime-input_errors-item')).toHaveLength(4);
  });
});
