import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import '../../../../build/style.css';
import { Tag } from '../Tag';
import Readme from '../readme.md';

storiesOf('Tag', module)
  .add('default', (withReadme(Readme, () => {
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
  }) as any))
  .add('Events', (withReadme(Readme, () => {
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
  }) as any));
