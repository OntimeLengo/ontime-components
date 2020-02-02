<h1>Radio</h1>

Component is used to choose one value of values

<h2>Radio</h2>

<h3>Props</h3>

| Property | Type     | Required | By default | One of  | Description                              |
| -------- | -------- | -------- | ---------- | ------- | ---------------------------------------- |
| label    | any      |          |            |         | Input label                              |
| value    | boolean  |          |            |         | Value                                    |
| disabled | boolean  |          |            |         | Disable/enable input                     |
| onClick  | function |          |            |         | Raised when the user clicks on input     |
| onFocus  | function |          |            |         | Raised when the input has received focus |
| onBlur   | function |          |            |         | Raised when the input has left focus     |
| onChange | function |          |            |         | Raised when the user changes input value |

<h3>Example</h3>

```javascript
import { Component } from 'react';
import { Radio } from 'ontime-components';

class Test extends Component {

  render() {
    return (
      <Radio
        label="Radio"
        value={ true }
        onChange={ (e) => { console.log('change') } }
      />
    );
  }

}
```

<h2>RadioGroup</h2>

<h3>Props</h3>

| Property      | Type            | Required | By default | One of            | Description                              |
| ------------- | --------------- | -------- | ---------- | ----------------- | ---------------------------------------- |
| label         | string          |          |            |                   | Input label                              |
| labelPosition | string          |          |            | top/left/right    | Label position                           |
| required      | boolean         |          |            |                   | Required char will be snown              |
| name          | string          |          |            |                   | Input name                               |
| kind          | string          |          |            | radio/button      | Input kind                               |
| position      | string          |          |            | row/column        | Direction for children elements          |
| size          | string          |          |            | (only for button) | Button size. Please see Button.          |
| data          | array           |          |            |                   | Input data                               |
| value         | any             |          |            |                   | Input value                              |
| mapValue      | string/function |          |            |                   | The key name for value when value is an object |
| errors        | array/boolean   |          |            |                   | Select errors. List of errors is shown below input. |
| onClick       | function        |          |            |                   | Raised when the user clicks on input     |
| onBlur        | function        |          |            |                   | Raised when the input has left focus     |
| onChange      | function        |          |            |                   | Raised when the user changes input value |

<h3>Example</h3>

```javascript
import { Component } from 'react';
import { RadioGroup } from 'ontime-components';

const data = [
  {id: 1, name: 'Radio 1'},
  {id: 2, name: 'Radio 2'},
  {id: 3, name: 'Radio 3'}
];

class Test extends Component {

  render() {
    return (
      <RadioGroup
        label="Radio"
        data={ data }
        value={ data[0] }
        onChange={ (item) => { console.log('change', item) } }
      />
    );
  }

}
```
