<h1>Paginator</h1>

The component is used to page navigation for requests

<h3>Props</h3>

| Property | Type     | Required | By default           | One of  | Description                    |
| -------- | -------- | -------- | -------------------- | ------- | ------------------------------ |
| page     | number   |          | 1                    |         | Current page                   |
| limit    | number   |          | 20                   |         | Current limit                  |
| total    | number   |          | 0                    |         | Total records on request       |
| count    | number   |          | 7                    |         | Count of buttons               |
| onChange | function |          |                      |         | Raised when user changes value |

```javascript
import { Component } from 'react';
import { Paginator } from 'ontime-components';

class Test extends Component {

  render() {
    return (
      <Paginator
        page={ 2 }
        limit={ 50 }
        total={ 25000 }
        onChange={ (page) => console.log(page) }
      />
    );
  }

}
```
