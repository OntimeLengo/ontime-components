<h1>Button</h1>

<h3>Props</h3>

* label - button label
* leftIcon - left icon. See Icon component.
* rightIcon - right icon. See Icon component.
* type - button type (button, submit)
* primary - set button as primary
* kind - button kind (default, primary, success, danger, warning, ghost)
* size - button size (medium, large, small, smaller)
* loading - show spin
* disabled - set button to disabled
* onClick: Raised when the user clicks on button
* className - additional css class

<h3>Example</h3>

```javascript
import { Component } from 'react';
import { Button } from 'ontime-dynamic';

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
