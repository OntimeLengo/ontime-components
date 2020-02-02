import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import '../../../../build/style.css';
import { Container } from '../Container';
import { Button } from '../../Button';
import Readme from '../readme.md';

const fnLeft: any = withReadme(Readme, () => {
  const style = {padding: '20px', width: '500px'};
  const bg = {backgroundColor: 'rgba(0, 0, 0, 0.03)'};

  return (
    <React.Fragment>
      <div style={ style }>
        <h3>Left</h3>
        <Container style={ bg }>
          <Button label="Button 1" />
          <Button label="Button 2" />
          <Button label="Button 3" />
        </Container>
      </div>
      <div style={ style }>
        <h3>Center</h3>
        <Container h="center" style={ bg }>
          <Button label="Button 1" />
          <Button label="Button 2" />
          <Button label="Button 3" />
        </Container>
      </div>
      <div style={ style }>
        <h3>Right</h3>
        <Container h="right" style={ bg }>
          <Button label="Button 1" />
          <Button label="Button 2" />
          <Button label="Button 3" />
        </Container>
      </div>
    </React.Fragment>
  );
});

const fnTop: any = withReadme(Readme, () => {
  const style = {padding: '20px', width: '500px'};
  const bg = {backgroundColor: 'rgba(0, 0, 0, 0.03)'};
  const button = { height: '100px' };

  return (
    <React.Fragment>
      <div style={ style }>
        <h3>Top</h3>
        <Container style={ bg }>
          <Button label="Button 1" style={ button } />
          <Button label="Button 2" />
          <Button label="Button 3" />
        </Container>
      </div>
      <div style={ style }>
        <h3>Center</h3>
        <Container v="middle" style={ bg }>
          <Button label="Button 1" style={ button } />
          <Button label="Button 2" />
          <Button label="Button 3" />
        </Container>
      </div>
      <div style={ style }>
        <h3>Bottom</h3>
        <Container v="bottom" style={ bg }>
          <Button label="Button 1" style={ button } />
          <Button label="Button 2" />
          <Button label="Button 3" />
        </Container>
      </div>
    </React.Fragment>
  );
});

const fnSpace: any = withReadme(Readme, () => {
  const style = {padding: '20px', width: '500px'};
  const bg = {backgroundColor: 'rgba(0, 0, 0, 0.03)'};

  return (
    <React.Fragment>
      <div style={ style }>
        <h3>20px</h3>
        <Container space={ 20 } style={ bg }>
          <Button label="Button 1" />
          <Button label="Button 2" />
          <Button label="Button 3" />
        </Container>
      </div>
      <div style={ style }>
        <h3>2em</h3>
        <Container space={ 2 } spaceUnits="em" style={ bg }>
          <Button label="Button 1" />
          <Button label="Button 2" />
          <Button label="Button 3" />
        </Container>
      </div>
    </React.Fragment>
  );
});

storiesOf('Container', module)
  .add('Left, Center, Right', fnLeft)
  .add('Top, Center, Bottom', fnTop)
  .add('Space, Space Units', fnSpace);
