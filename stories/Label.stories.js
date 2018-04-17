import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme } from 'storybook-readme';

import '../dist/main.css';
import { Label } from '../src';

import Readme from '../src/components/Label/readme.md';

storiesOf('Label', module)
  .add('To use "children" props', withReadme(Readme, () => <Label>Label text</Label>))
  .add('To use "value" props', withReadme(Readme, () => <Label value="Text into value props" />))
  .add('To use "required" props', withReadme(Readme, () => <Label required>Required</Label>));

// import React from 'react';

// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
  