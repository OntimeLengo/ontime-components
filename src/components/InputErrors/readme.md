<h1>InputErrors</h1>

The component InputErrors is used to show list of errors below input.

<h3>Props</h3>

| Property  | Type                                                           | Required | Description    |
| --------- | -------------------------------------------------------------- | -------- | -------------- |
| value     | Error[] \| string[] \| {name: string}[] \| {message: string}[] | true     | List of errors |

<h3>Example</h3>

```javascript
import { Component } from 'react';
import { InputErrors } from 'ontime-components';

class Test extends Component {

  render() {
    const errors = [
      // use string
      'Field is required',
      // use Error instance 
      new Error('Max length must be 10 chars'),
      // use object with key name
      {name: 'Min length must be 1 char'},
      // use object with key message
      {message: 'Value is not a email'}
    ];


    return <InputErrors value={ errors } />
  }

}
```
