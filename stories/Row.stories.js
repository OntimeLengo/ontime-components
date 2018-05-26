import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme } from 'storybook-readme';

import '../dist/main.css';
import { Row, Input, Button } from '../src';

import Readme from '../src/components/Row/readme.md';

storiesOf('Row', module)
  .add('default', withReadme(Readme, () => {
    const style = {padding: '20px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Row>
            <Input />
            <Input />
            <Input />
            <Input />
          </Row>
        </div>
      </React.Fragment>
    );
  }))
  .add('Predefined column size', withReadme(Readme, () => {
    const style = {padding: '20px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Row sizes={ [2, 4, 6] }>
            <Input value="2" />
            <Input value="4" />
            <Input value="6" />
          </Row>
        </div>
      </React.Fragment>
    );
  }))
  .add('Row column contains row', withReadme(Readme, () => {
    const style = {padding: '20px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Row>
            <Input value="parent row - column 1" />
            <Input value="parent row - column 2" />
            <Row>
              <Input value="child row - column 1" />
              <Input value="child row - column 2" />
            </Row>
          </Row>
        </div>
      </React.Fragment>
    );
  }));
