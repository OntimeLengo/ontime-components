<h1>Notice</h1>

The component is used to show notifications.

<h3>Props</h3>

| Property         | Type     | Description                                     |
| ---------------- | -------- | ----------------------------------------------- |
| type             | string   | Notice type (default, success, danger, warning) |
| onClose          | function | Show on right side closable icon                |

<h3>Example</h3>

```javascript
import { Component } from 'react';
import { Notice } from 'ontime-components';

class Test extends Component {

  render() {
    return (
      <Notice>Some text here</Notice>
    );
  }

}
```
