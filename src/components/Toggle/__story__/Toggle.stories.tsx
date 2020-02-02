import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import '../../../../build/style.css';
import { Toggle } from '../Toggle';
import Readme from '../readme.md';

storiesOf('Toggle', module)
  .add('Default', (withReadme(Readme, () => {
    const cb = action('changed by user');

    return (
      <React.Fragment>
        <div style={ {margin: '20px'} }>
          <Toggle value={ true } label="Toggle" onChange={ cb } />
        </div>
      </React.Fragment>
    );
  })) as any)
  .add('Without label', (withReadme(Readme, () => {
    return (
      <React.Fragment>
        <div style={ {margin: '20px'} }>
          <Toggle value={ true } />
        </div>
      </React.Fragment>
    );
  })) as any)
  .add('Disabled', (withReadme(Readme, () => {
    return (
      <React.Fragment>
        <div style={ {margin: '20px'} }>
          <Toggle disabled value={ true } label="Toggle"/>
        </div>
      </React.Fragment>
    );
  })) as any);
