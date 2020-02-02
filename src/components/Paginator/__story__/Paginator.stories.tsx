import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import '../../../../build/style.css';
import Readme from '../readme.md';
import { Paginator } from '../Paginator';

storiesOf('Paginator', module)
  .add('Default', (withReadme(Readme, () => {
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
  })) as any)
;
