import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import '../../../../build/style.css';
import Readme from '../readme.md';
import { Notice } from '../Notice';

storiesOf('Notice', module)
  .add('Default', (withReadme(Readme, () => {
    const style = {marginTop: '10px', marginLeft: '10px', width: '400px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Notice>Default notice</Notice>
        </div>
        <div style={ style }>
          <Notice onClose={ action('close') }>Closable notice</Notice>
        </div>
        <div style={ style }>
          <Notice type="success">Success notice</Notice>
        </div>
        <div style={ style }>
          <Notice type="warning">Warning notice</Notice>
        </div>
        <div style={ style }>
          <Notice type="danger">Danger notice</Notice>
        </div>
      </React.Fragment>
    );
  })) as any);
  