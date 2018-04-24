import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme } from 'storybook-readme';

import '../dist/main.css';
import { Tag } from '../src';

import Readme from '../src/components/Tag/readme.md';

storiesOf('Tag', module)
  .add('default', withReadme(Readme, () => {
    const style = {padding: '20px', width: '350px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Tag value="Default tag" />
          <br /><br />
          <Tag value="Not closable tag" isClosable={ false } />
        </div>
      </React.Fragment>
    );
  }))
  .add('Events', withReadme(Readme, () => {
    const style = {padding: '20px', width: '350px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Tag value="Tag 1" 
            onClose={ action('close') }
            onClick={ action('click') }
            onDoubleClick={ action('double click') }
          />
        </div>
      </React.Fragment>
    );
  }));
