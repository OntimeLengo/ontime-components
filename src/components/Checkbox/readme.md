<h1>Checkbox</h1>

<h3>Props</h3>

| Property  | Type     | Required | Description                                            |
| --------- | -------- | -------- | ------------------------------------------------------ |
| type      | TType    | false    | Checkbox type, checkbox or button. By default checkbox |
| label     | string   | false    | content                                                |
| children  | any      | false    | content                                                |
| value     | boolean  | false    | checkbox value, true or false                          |
| disabled  | boolean  | false    | set checkbox to disabled                               |
| onClick   | function | false    | Raised when the user clicks on checkbox                |
| onFocus   | function | false    | Raised when the element receives focus                 |
| onBlur    | function | false    | Raised when the element loses focus                    |
| onChange  | function | false    | Raised when the user changes value                     |

<h3>Example</h3>

```javascript
import { Component } from 'react';
import { Checkbox } from 'ontime-components';

class Test extends Component {

  render() {
    return (
      <Checkbox
        label="Checkbox"
        type="button"
        value={ true }
        onChange={ (e) => { console.log('change') } }
      />
    );
  }

}
```
