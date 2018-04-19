<h1>Toggle</h1>

<h3>Props</h3>

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
import { Toggle } from 'ontime-dynamic';

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
