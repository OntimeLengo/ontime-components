<h1>Input</h1>

<h3>Props</h3>

| Property         | Type           | Description |
| ---------------- | -------------- | ----------- |
| label            | string         | input label |
| labelPosition    | string         | label position ('top', 'left', 'right') |
| required         | bool           | show required char after label text |
| type             | string         | input type ('text', 'number', 'email', 'password') |
| size             | string         | input size ('large', 'medium', 'small', 'smaller') |
| id               | string         | input DOM id |
| name             | string         | input DOM name |
| leftIcon         | string         | Left input icon |
| rightIcon        | string         | Right input icon |
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
| onLeftIconClick  | function       | Raised when the user clicks on left input icon |
| onRightIconClick | function       | Raised when the user clicks on right input icon |

<h3>Example</h3>

```javascript
import { Component } from 'react';
import { Input } from 'ontime-components';

class Test extends Component {

  render() {
    return (
      <Input 
        type="email"
        label="Email"
        labelPosition="left"
        placeholder="User email"
        autoFocus
        onChange={ (e) => { console.log('changed') } }
      />
    );
  }

}
```
