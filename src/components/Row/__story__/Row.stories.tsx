import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import '../../../../build/style.css';
import { Row } from '../Row';
import { Input } from '../../Input';
import Readme from '../readme.md';

storiesOf('Row', module)
  .add('default', (withReadme(Readme, () => {
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
  }) as any))
  .add('Predefined column size', (withReadme(Readme, () => {
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
  }) as any))
  .add('Row column contains row', (withReadme(Readme, () => {
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
  }) as any));
