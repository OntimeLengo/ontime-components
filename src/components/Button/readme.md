<h1>Button</h1>

<h3>Props</h3>

| Property  | Type     | Required | Description                           |
| --------- | -------- | -------- | ------------------------------------- |
| type      | TType    | false    | button type                           |
| size      | TSize    | false    | button size                           |
| kind      | TKind    | false    | button kind                           |
| label     | string   | false    | button label                          |
| leftIcon  | string   | false    | left icon. See Icon component         |
| rightIcon | string   | false    | right icon. See Icon component        |
| primary   | boolean  | false    | set button as primary                 |
| loading   | boolean  | false    | show spin                             |
| disabled  | boolean  | false    | set button to disabled                |
| onClick   | function | false    | Raised when the user clicks on button |

<h3>Example</h3>

```javascript
import { Component } from 'react';
import { Button } from 'ontime-components';

class Test extends Component {

  render() {
    return (
      <Button 
        label="Save"
        leftIcon="save"
        type="submit"
        primary={ true }
        kind="success"
        size="medium"
        onClick={ (e) => { console.log('submit') } }
      />
    );
  }

}
```
