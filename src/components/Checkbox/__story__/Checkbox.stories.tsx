import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import '../../../../build/style.css';
import { Checkbox } from '../Checkbox';
import Readme from '../readme.md';

const fnDefault: any = withReadme(Readme, () => {
  const cb = action('changed by user');

  return (
    <React.Fragment>
      <div style={ {margin: '20px'} }>
        <Checkbox value={ true } label="Checkbox" onChange={ cb } />
      </div>
    </React.Fragment>
  );
});

const fnWithout: any = withReadme(Readme, () => {
  return (
    <React.Fragment>
      <div style={ {margin: '20px'} }>
        <Checkbox value={ true } />
      </div>
    </React.Fragment>
  );
});

const fnDisabled: any = withReadme(Readme, () => {
  return (
    <React.Fragment>
      <div style={ {margin: '20px'} }>
        <Checkbox disabled value={ true } label="Checkbox"/>
      </div>
    </React.Fragment>
  );
});

const fnButton: any = withReadme(Readme, () => {
  return (
    <React.Fragment>
      <div style={ {margin: '20px'} }>
        <Checkbox type="button" value={ true } label="Checkbox"/>
      </div>
    </React.Fragment>
  );
});

const fnButtonDis: any = withReadme(Readme, () => {
  return (
    <React.Fragment>
      <div style={ {margin: '20px'} }>
        <Checkbox type="button" disabled>Checkbox</Checkbox>
      </div>
    </React.Fragment>
  );
});

storiesOf('Checkbox', module)
  .add('Default', fnDefault)
  .add('Without label', fnWithout)
  .add('Disabled', fnDisabled)
  .add('Button', fnButton)
  .add('Button disabled', fnButtonDis);
