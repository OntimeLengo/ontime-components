<h1>Container</h1>

The component is used to align elements into simple line 

<h3>Props</h3>

| Property   | Type    | By default | One of            | Description               |
| ---------- | ------- | ---------- | ----------------- | ------------------------- |
| h          | string  | left       | left/center/rigth | Align by horisontal       |
| v          | string  | top        | top/middle/bottom | Align by vertical         |
| space      | number  | undefined  |                   | Space between elements    |
| spaceUnits | string  | px         |                   | Units space (px, em etc)  |
| direction  | string  | row        | row/column        | Set direction to children |
| full       | boolean | true       |                   | Set width equals 100%     |

```javascript
import { Component } from 'react';
import { Container, Button } from 'ontime-components';

class Test extends Component {

  render() {
    return (
      <Container h="center" v="middle" space={ 1 } spaceUnits="em" >
        <Button label="Button" />
        <Button label="Button" />
        <Button label="Button" />
        <Button label="Button" />
      </Container>
    );
  }

}
```
