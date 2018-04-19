import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme } from 'storybook-readme';

import '../dist/main.css';
import { Toggle } from '../src';

import Readme from '../src/components/Toggle/readme.md';

storiesOf('Toggle', module)
  .add('Default', withReadme(Readme, () => {
    const cb = action('changed by user');

    return (
      <React.Fragment>
        <div style={ {margin: '20px'} }>
          <Toggle value={ true } label="Toggle" onChange={ cb } />
        </div>
      </React.Fragment>
    );
  }))
  .add('Without label', withReadme(Readme, () => {
    return (
      <React.Fragment>
        <div style={ {margin: '20px'} }>
          <Toggle value={ true } />
        </div>
      </React.Fragment>
    );
  }))
  .add('Disabled', withReadme(Readme, () => {
    return (
      <React.Fragment>
        <div style={ {margin: '20px'} }>
          <Toggle disabled value={ true } label="Toggle"/>
        </div>
      </React.Fragment>
    );
  }));
