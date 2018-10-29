import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme } from 'storybook-readme';

import '../dist/main.css';
import { Paginator } from '../src';

import Readme from '../src/components/Paginator/readme.md';

storiesOf('Paginator', module)
  .add('Default', withReadme(Readme, () => {
    const style = {padding: '20px', width: '400px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Paginator 
            page={ 10 }
            limit={ 20 }
            total={ 1000 }
            onChange={ action('changed') }
          />
        </div>
      </React.Fragment>
    );
  }))
;
