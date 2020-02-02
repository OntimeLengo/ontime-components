import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import '../../../../build/style.css';
import { Text } from '../Text';
import Readme from '../readme.md';

storiesOf('Text', module)
  .add('Default', (withReadme(Readme, () => {
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
  })) as any);
