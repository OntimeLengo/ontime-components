import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme } from 'storybook-readme';

import '../dist/main.css';
import { Text } from '../src';

import Readme from '../src/components/Text/readme.md';

storiesOf('Text', module)
  .add('Default', withReadme(Readme, () => {
    const style = {padding: '0 0 0 0.4em', width: '800px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Text value="Simple text" />
        </div>
        <div style={ style }>
          <Text value="Simple strong text" strong />
        </div>
      </React.Fragment>
    );
  }))
;
