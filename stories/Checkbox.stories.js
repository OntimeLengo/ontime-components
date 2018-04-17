import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme } from 'storybook-readme';

import '../dist/main.css';
import { Checkbox } from '../src';

import Readme from '../src/components/Checkbox/readme.md';

storiesOf('Checkbox', module)
  .add('Default', withReadme(Readme, () => {
    const cb = action('changed by user');

    return (
      <React.Fragment>
        <div style={ {margin: '20px'} }>
          <Checkbox value={ true } label="Checkbox" onChange={ cb } />
        </div>
      </React.Fragment>
    );
  }))
  .add('Without label', withReadme(Readme, () => {
    return (
      <React.Fragment>
        <div style={ {margin: '20px'} }>
          <Checkbox value={ true } />
        </div>
      </React.Fragment>
    );
  }))
  .add('Disabled', withReadme(Readme, () => {
    return (
      <React.Fragment>
        <div style={ {margin: '20px'} }>
          <Checkbox disabled value={ true } label="Checkbox"/>
        </div>
      </React.Fragment>
    );
  }))
  .add('Button', withReadme(Readme, () => {
    return (
      <React.Fragment>
        <div style={ {margin: '20px'} }>
          <Checkbox type="button" value={ true } label="Checkbox"/>
        </div>
      </React.Fragment>
    );
  }))
  .add('Button disabled', withReadme(Readme, () => {
    return (
      <React.Fragment>
        <div style={ {margin: '20px'} }>
          <Checkbox type="button" disabled>Checkbox</Checkbox>
        </div>
      </React.Fragment>
    );
  }));
