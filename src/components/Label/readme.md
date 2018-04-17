<h1>Label</h1>

<h3>Props</h3>

* value - content
* children - content
* required - show required char after label text
* className - additional css class

<h3>Examples</h3>

<strong>To use "children" props</strong>
```javascript
import { Component } from 'react';
import { Label } from 'ontime-dynamic';

class Test extends Component {

  render() {
    return <Label>text here</Label>
  }

}
```

<strong>To use "value" props</strong>
```javascript
import { Component } from 'react';
import { Label } from 'ontime-dynamic';

class Test extends Component {

  render() {
    return <Label value="text here" />
  }

}
```

<strong>To use "required" props</strong>
```javascript
import { Component } from 'react';
import { Label } from 'ontime-dynamic';

class Test extends Component {

  render() {
    return <Label required>text here</Label>
  }

}
```