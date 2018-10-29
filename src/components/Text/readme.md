<h1>Text</h1>

The component is used to show some text

<h3>Props</h3>

| Property | Type    | By default | One of | Description |
| -------- | ------- | ---------- | ------ | ----------- |
| value    | string  |            |        | Text value  |
| strong   | string  | false      |        | Bold value  |

```javascript
import { Component } from 'react';
import { Text } from 'ontime-components';

class Test extends Component {

  render() {
    return (
      <div>
        <Text value="Some text" />
        <Text>Some text</Text>
        <Text value="Some text" strong />
      </div>
    );
  }

}
```
