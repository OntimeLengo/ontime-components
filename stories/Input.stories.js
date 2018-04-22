import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme } from 'storybook-readme';

import '../dist/main.css';
import { Input } from '../src';

import Readme from '../src/components/Input/readme.md';

storiesOf('Input', module)
  .add('Default', withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Input />
        </div>
      </React.Fragment>
    );
  }))
  .add('Predefined value', withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Input value="John Snow" />
        </div>
      </React.Fragment>
    );
  }))
  .add('Placeholder', withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Input placeholder="Please input your text" />
        </div>
      </React.Fragment>
    );
  }))
  .add('Label', withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Input label="Top position" />
          <br />
          <Input label="Left position" labelPosition="left" />
          <br />
          <Input label="Right position" labelPosition="right" />
          <br />
          <Input label="Required label" required />
        </div>
      </React.Fragment>
    );
  }))
  .add('Type', withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Input label="text" value="John Snow" />
          <br />
          <Input label="number" type="number" value="10" />
          <br />
          <Input label="password" type="password" />
          <br />
          <Input label="email" type="email" />
        </div>
      </React.Fragment>
    );
  }))
  .add('Size', withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Input label="smaller" size="smaller" labelPosition="left" value="John Snow" />
          <br />
          <Input label="small" size="small" labelPosition="left" value="John Snow" />
          <br />
          <Input label="medium" size="medium" labelPosition="left" value="John Snow" />
          <br />
          <Input label="large" size="large" labelPosition="left" value="John Snow" />
        </div>
      </React.Fragment>
    );
  }))
  .add('Icon', withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Input label="Left icon" value="John Snow" leftIcon="address-card-o" />
          <br />
          <Input label="Right icon" value="John Snow" rightIcon="question-circle-o" />
          <br />
          <Input label="Both" value="John Snow" leftIcon="address-card-o" rightIcon="question-circle-o" />
          <br />
        </div>
      </React.Fragment>
    );
  }))
  .add('Autofocus and disabled', withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Input label="Autofocus" autoFocus />
          <br />
          <Input label="Disabled" value="John Snow" disabled />
        </div>
      </React.Fragment>
    );
  }))
  .add('Error', withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};
    const errors = [
      new Error('Field is reauired'),
      new Error('Min length must be 3 chars')
    ];

    return (
      <React.Fragment>
        <div style={ style }>
          <Input label="Error" errors={ errors } />
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
    const cbLeftIconClick = action('left icon click');
    const cbRightIconClick = action('right icon click');
    const style = {padding: '20px', width: '300px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Input 
            leftIcon="user" 
            rightIcon="address-card-o" 
            label="Events"
            onClick={ cbClick }
            onChange={ cbChange }
            onFocus={ cbFocus }
            onBlur={ cbBlur }
            onKeyDown={ cbKeyDown }
            onLeftIconClick={ cbLeftIconClick }
            onRightIconClick={ cbRightIconClick }
          />
        </div>
      </React.Fragment>
    );
  }));
