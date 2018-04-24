<h1>Textare</h1>

<h3>Props</h3>

| Property         | Type           | Description |
| ---------------- | -------------- | ----------- |
| label            | string         | input label |
| labelPosition    | string         | label position ('top', 'left', 'right') |
| required         | bool           | show required char after label text |
| id               | string         | input DOM id |
| name             | string         | input DOM name |
| value            | string, number | default value. By default '' |
| placeholder      | string         | input placeholder |
| autoFocus        | bool           | set cursor to input by default |
| disabled         | bool           | disabled input |
| tabIndex         | string, number | input DOM tabIndex |
| errors           | array, bool    | input errors. List of errors is shown below input. |
| onClick          | function       | Raised when the user clicks on input |
| onChange         | function       | Raised when the user changes input value |
| onFocus          | function       | Raised when the input has received focus |
| onBlur           | function       | Raised when the input has left focus |
| onKeyDown        | function       | Raised when the user press key button |

<h3>Example</h3>

```javascript
import { Component } from 'react';
import { Textarea } from 'ontime-components';

class Test extends Component {

  render() {
    return (
      <Textarea 
        label="Description"
        labelPosition="left"
        placeholder="Write your long text here"
        autoFocus
        onChange={ (e) => { console.log('changed') } }
      />
    );
  }

}
```
