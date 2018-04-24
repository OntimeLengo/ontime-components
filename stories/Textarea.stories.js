import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme } from 'storybook-readme';

import '../dist/main.css';
import { Textarea } from '../src';

import Readme from '../src/components/Textarea/readme.md';

storiesOf('Textarea', module)
  .add('Default', withReadme(Readme, () => {
    const style = {padding: '20px', width: '350px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Textarea />
        </div>
      </React.Fragment>
    );
  }))
  .add('Predefined value', withReadme(Readme, () => {
    const style = {padding: '20px', width: '350px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Textarea value="John Snow (by value)" />
        </div>
        <div style={ style }>
          <Textarea>John Snow (by children)</Textarea>
        </div>
      </React.Fragment>
    );
  }))
  .add('Placeholder', withReadme(Readme, () => {
    const style = {padding: '20px', width: '350px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Textarea placeholder="Please input your long text" />
        </div>
      </React.Fragment>
    );
  }))
  .add('Label', withReadme(Readme, () => {
    const style = {padding: '20px', width: '350px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Textarea label="Top position" />
          <br />
          <Textarea label="Left position" labelPosition="left" />
          <br />
          <Textarea label="Right position" labelPosition="right" />
          <br />
          <Textarea label="Required label" required />
        </div>
      </React.Fragment>
    );
  }))
  .add('Autofocus and disabled', withReadme(Readme, () => {
    const style = {padding: '20px', width: '350px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Textarea label="Autofocus" autoFocus />
          <br />
          <Textarea label="Disabled" value="John Snow" disabled />
        </div>
      </React.Fragment>
    )
  }))
  .add('Error', withReadme(Readme, () => {
    const style = {padding: '20px', width: '350px'};
    const errors = [
      new Error('Field is reauired'),
      new Error('Min length must be 3 chars')
    ];

    return (
      <React.Fragment>
        <div style={ style }>
          <Textarea label="Error" errors={ errors } />
        </div>
      </React.Fragment>
    );
  }))
  .add('Events', withReadme(Readme, () => {
    const cbClick = action('click');
    const cbFocus = action('focus');
    const cbBlur = action('blur');
    const cbChange = action('change');
    const cbKeyDown = action('keydown');
    const style = {padding: '20px', width: '350px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Textarea 
            label="Events"
            onClick={ cbClick }
            onChange={ cbChange }
            onFocus={ cbFocus }
            onBlur={ cbBlur }
            onKeyDown={ cbKeyDown }
          />
        </div>
      </React.Fragment>
    );
  }));
    