<h1>Toggle</h1>

<h3>Props</h3>

| Property  | Type     | Required | Description                                            |
| --------- | -------- | -------- | ------------------------------------------------------ |
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
import { Toggle } from 'ontime-components';

class Test extends Component {

  render() {
    return (
      <Toggle
        label="Toggle"
        value={ true }
        onChange={ (e) => { console.log('change') } }
      />
    );
  }

}
```
