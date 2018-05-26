<h1>Row</h1>

The component is used to align elements into the line.

<h3>Props</h3>

| Property         | Type  | Description                          |
| ---------------- | ----- | ------------------------------------ |
| size             | array | Array of column length. From 1 to 12 |

<h3>Example</h3>

```javascript
import { Component } from 'react';
import { Row, Input } from 'ontime-components';

class Test extends Component {

  render() {
    return (
      <Row>
        <Input />
        <Input />
        <Input />
        <Input />
      </Row>
    );
  }

}
```

```javascript
import { Component } from 'react';
import { Tag } from 'ontime-components';

class Test extends Component {

  render() {
    return (
      <Row sizes={ [2, 4, 6] }>
        <Input />
        <Input />
        <Input />
      </Row>
    );
  }

}
```

```javascript
import { Component } from 'react';
import { Tag } from 'ontime-components';

class Test extends Component {

  render() {
    return (
      <Row sizes={ [2, 4, 6] }>
        <Row>
          <Input value="parent row - column 1" />
          <Input value="parent row - column 2" />
          <Row>
            <Input value="child row - column 1" />
            <Input value="child row - column 2" />
          </Row>
        </Row>
      </Row>
    );
  }

}
```