<h1>Icon</h1>

The icon uses font-awesome icons v4.7.0
For value enough to use only icon name without prefix "fa". Only "user" or "at". Wrong name for example "fa-at". Be careful.

More details about icons here https://fontawesome.com/v4.7.0/

<h3>Props</h3>

* value - Icon name. 
* size - Icon size. (lg, 2x, 3x, 4x, 5x)
* onClick - Raised when the user clicks on Icon
* className - additional css class

<h3>Examples</h3>

<strong>Default using</strong>
```javascript
import { Component } from 'react';
import { Icon } from 'ontime-components';

class Test extends Component {

  render() {
    return <Icon value="user" />
  }

}
```

<strong>onClick event</strong>
```javascript
import { Component } from 'react';
import { Icon } from 'ontime-components';

class Test extends Component {

  render() {
    return <Icon value="user" onClick={ (e) => console.log('Clicked') } />
  }

}
```