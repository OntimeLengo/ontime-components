import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme } from 'storybook-readme';

import '../dist/main.css';
import { Icon } from '../src';

import Readme from '../src/components/Icon/readme.md';

storiesOf('Icon', module)
  .add('Default', withReadme(Readme, () => {
    const name = 'user';
    const cb = action('clicked on user');
    const style = {paddingLeft: '6px'};

    return (
      <React.Fragment>
        <Icon value={ name } onClick={ cb } />
          <span style={ style } />
        <Icon value={ name } size="lg" onClick={ cb } />
          <span style={ style } />
        <Icon value={ name } size="2x" onClick={ cb } />
          <span style={ style } />
        <Icon value={ name } size="3x" onClick={ cb } />
          <span style={ style } />
        <Icon value={ name } size="4x" onClick={ cb } />
          <span style={ style } />
        <Icon value={ name } size="5x" onClick={ cb } />
      </React.Fragment>
    );
  }));
