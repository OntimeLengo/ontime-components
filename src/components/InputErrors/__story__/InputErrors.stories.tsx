import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import '../../../../build/style.css';
import { InputErrors } from '../InputErrors';
import Readme from '../readme.md';

const fnDef: any = withReadme(Readme, () => {
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
});

storiesOf('InputErrors', module)
  .add('Default', fnDef);
