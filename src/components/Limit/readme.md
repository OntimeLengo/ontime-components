<h1>Limit</h1>

The component is used to limitation rows from request

<h3>Props</h3>

| Property | Type     | Required | By default           | One of  | Description                    |
| -------- | -------- | -------- | -------------------- | ------- | ------------------------------ |
| limit    | number   |          | 20                   |         | Default limit                  |
| data     | array    |          | [5, 10, 20, 50, 100] |         | List of limits                 |
| onChange | function |          |                      |         | Raised when user changes value |

```javascript
import { Component } from 'react';
import { Limit } from 'ontime-components';

class Test extends Component {

  render() {
    return (
      <Limit 
        limit=10 
        onChange={ (limit) => console.log(limit) }
      />
    );
  }

}
```
