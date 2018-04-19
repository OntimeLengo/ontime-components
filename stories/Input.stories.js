import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme } from 'storybook-readme';

import '../dist/main.css';
import { Input } from '../src';

import Readme from '../src/components/Input/readme.md';

storiesOf('Input', module)
  .add('Labels', withReadme(Readme, () => {
    const cb = action('clicked on user');
    const style = {padding: '20px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Input leftIcon="user" rightIcon="address-card-o" />
        </div>
      </React.Fragment>
    );
  }));
