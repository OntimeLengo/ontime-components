<h1>Table</h1>

The component is used to show data in table

<h3>Props</h3>

| Property | Type     | Required | By default | One of | Description                          |
| -------- | -------- | -------- | ---------- | ------ | ------------------------------------ |
| data     | array    |          | []         |        | Array of items                       |
| head     | function |          |            |        | Function returns row of table header |
| row      | function | true     |            |        | Function returns row of table        |

```javascript
import { Component } from 'react';
import { Table } from 'ontime-components';

const data = [
  {id: 1, name: 'Text 1'},
  {id: 2, name: 'Text 2'},
  {id: 3, name: 'Text 3'}
];

class Test extends Component {

  render() {
    return (
      <Table 
        data={ data }
        head={ () => {
          return (
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          );
        } }
        row={ (item, idx) => {
          return (
            <tr key={ idx.toString() }>
              <td>{ item.id }</td>
              <td>{ item.name }</td>
            </tr>
          );
        } }
      />
    );
  }

}
```
