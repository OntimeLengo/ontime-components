import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme } from 'storybook-readme';

import '../dist/main.css';
import { Limit } from '../src';

import Readme from '../src/components/Limit/readme.md';

const limits = [10, 20, 30, 50, 100];

storiesOf('Limit', module)
  .add('Default', withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Limit 
            limit={ 20 }
            data={ limits }
            onChange={ action('changed') }
          />
        </div>
      </React.Fragment>
    );
  }))
;
