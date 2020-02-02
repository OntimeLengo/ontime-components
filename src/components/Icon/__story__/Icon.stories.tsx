import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import '../../../../build/style.css';
import { Icon } from '../Icon';
import Readme from '../readme.md';

const fnDef: any = withReadme(Readme, () => {
  const name = 'check';
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
});

storiesOf('Icon', module)
  .add('Default', fnDef);
