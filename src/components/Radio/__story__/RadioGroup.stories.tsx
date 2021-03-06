import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import '../../../../build/style.css';
import { RadioGroup } from '../RadioGroup';
import Readme from '../readme.md';

const data = [
  {id: 1, name: 'Radio 1'},
  {id: 2, name: 'Radio 2'},
  {id: 3, name: 'Radio 3'}
];

storiesOf('RadioGroup', module)
  .add('Radio', (withReadme(Readme, () => {
    const style = {padding: '20px', width: '600px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <RadioGroup 
            label="Radio (row)"
            data={ data }
            value={ data[0] }
            onChange={ action('changed') }
          />
        </div>
        <div style={ style }>
          <RadioGroup 
            position="column"
            label="Radio (column)"
            data={ data }
            value={ data[0] }
            onChange={ action('changed') }
          />
        </div>
      </React.Fragment>
    );
  }) as any))
  .add('Buttons', (withReadme(Readme, () => {
    const style = {padding: '20px', width: '600px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <RadioGroup 
            kind="button"
            label="Buttons (row)"
            data={ data }
            value={ data[0] }
            onChange={ action('changed') }
          />
        </div>
        <div style={ style }>
          <RadioGroup 
            kind="button"
            label="Buttons (column)"
            position="column"
            data={ data }
            value={ data[0] }
            onChange={ action('changed') }
          />
        </div>
      </React.Fragment>
    );
  }) as any));
