<h1>Tag</h1>

<h3>Props</h3>

| Property         | Type           | Description |
| ---------------- | -------------- | ----------- |
| value            | string         | Tag content. Required |
| isClosable       | bool           | Show a close button. By default true |
| onClose          | function       | Raised when the user clicks on a close button |
| onClick          | function       | Raised when the user clicks on a tag |
| onDoubleClick    | function       | Raised when the user double clicks on a tag |

<h3>Example</h3>

```javascript
import { Component } from 'react';
import { Tag } from 'ontime-components';

class Test extends Component {

  render() {
    return (
      <Tag 
        value="tag 1"
        onClose={ (e) => { console.log('close') } }
      />
    );
  }

}
```
