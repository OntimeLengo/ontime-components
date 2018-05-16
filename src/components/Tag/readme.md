<h1>Tag</h1>

<h3>Props</h3>

| Property         | Type                   | Description |
| ---------------- | ---------------------- | ----------- |
| value            | string, number, object | Tag content. Required |
| mapValue         | string, function       | Map value to get text value form object |
| isClosable       | bool                   | Show a close button. By default true |
| onClose          | function               | Raised when the user clicks on a close button |
| onClick          | function               | Raised when the user clicks on a tag |
| onDoubleClick    | function               | Raised when the user double clicks on a tag |

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

```javascript
import { Component } from 'react';
import { Tag } from 'ontime-components';

class Test extends Component {

  render() {
    return (
      <Tag 
        value={ {id: 1, name: 'John Snow'} }
        mapValue="name"
        onClose={ (e) => { console.log('close') } }
      />
      <Tag 
        value={ {id: 2, name: 'Sansa Stark'} }
        mapValue={ value => (value.id + ' ' + value.name) }
        onClose={ (e) => { console.log('close') } }
      />
    );
  }

}
```
