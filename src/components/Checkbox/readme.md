<h1>Checkbox</h1>

<h3>Props</h3>

* type - Checkbox type, checkbox or button. By default checkbox
* label - content
* children - content
* value - checkbox value, true or false
* disabled - set checkbox to disabled
* onClick - Raised when the user clicks on checkbox
* onFocus - Raised when the element receives focus
* onBlur - Raised when the element loses focus
* onChange - Raised when the user changes value

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
