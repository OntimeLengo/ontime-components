import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme } from 'storybook-readme';

import '../dist/main.css';
import { InputErrors } from '../src';

import Readme from '../src/components/InputErrors/readme.md';

storiesOf('InputErrors', module)
  .add('Default', withReadme(Readme, () => {
    const style = {paddingLeft: '6px'};
    const errors = [
      'string: Example -> "Error 1"',
      new Error('error: Example -> new Error("Error 2")'),
      {name: 'object.name: Example -> {name: "Error 3"}'},
      {message: 'object.message: Example -> {message: "Error 4"}'}
    ];

    return (
      <div style={ style }>
        <InputErrors value={ errors } />
      </div>
    );
  }));
