<h1>Label</h1>

<h3>Props</h3>

| Property  | Type     | Required | Description                        |
| --------- | -------- | -------- | ---------------------------------- |
| value     | stirng   | false    | content                            |
| children  | any      | false    | content                            |
| required  | boolean  | false    | how required char after label text |

<h3>Examples</h3>

<strong>To use "children" props</strong>

```javascript
import { Component } from 'react';
import { Label } from 'ontime-components';

class Test extends Component {

  render() {
    return <Label>text here</Label>
  }

}
```

<strong>To use "value" props</strong>

```javascript
import { Component } from 'react';
import { Label } from 'ontime-components';

class Test extends Component {

  render() {
    return <Label value="text here" />
  }

}
```

<strong>To use "required" props</strong>

```javascript
import { Component } from 'react';
import { Label } from 'ontime-components';

class Test extends Component {

  render() {
    return <Label required>text here</Label>
  }

}
```
