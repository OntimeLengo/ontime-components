import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import '../../../../build/style.css';
import { Label } from '../Label';
import Readme from '../readme.md';

const fnChildren: any = withReadme(Readme, () => <Label>Label text</Label>);
const fnValue: any =  withReadme(Readme, () => <Label value="Text into value props" />);
const fnRequired: any = withReadme(Readme, () => <Label required>Required</Label>);

storiesOf('Label', module)
  .add('To use "children" props', fnChildren)
  .add('To use "value" props', fnValue)
  .add('To use "required" props', fnRequired);
