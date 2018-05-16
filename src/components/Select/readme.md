<h1>Select</h1>

<h3>Props</h3>

| Property         | Type             | Description |
| ---------------- | ---------------- | ----------- |
| dataSource       | function         | Required. The data source for the list. It must be async function and it has to return an array. |
| fetchParams      | object           | Additional parameters for a dataSource. It will be transferred to dataSource function. |
| autoFetch        | boolean          | The property shows that dataSource will be called when the component has mounted. |
| value            | any              | Default value | 
| multiple         | boolead          | The property shows that the user is able to choose multi-value. |
| mapValue         | string, function | The key name for value when value is an object |
| customItemTpl    | function         | Custom template for an item of a list. The function must returns component or array of components. |
| label            | string           | Select label |
| labelPosition    | string           | label position ('top', 'left', 'right') |
| required         | boolean          | show required char after label text |
| searchable       | boolean          | The property shows that a component contains Search field. Search value will be sent as parameters argument "search" to dataSource function. |
| clearable        | boolean          | The property shows that select is able to cleared |
| size             | string           | Select size ('large', 'medium', 'small', 'smaller') |
| id               | string           | Select DOM id |
| name             | string           | Select DOM name |
| placeholder      | string           | Select placeholder |
| autoFocus        | bool             | Set cursor to Select by default |
| disabled         | bool             | Disabled Select |
| tabIndex         | string, number   | Select DOM tabIndex |
| errors           | array, bool      | Select errors. List of errors is shown below input. |
| onClick          | function         | Raised when the user clicks on select |
| onChange         | function         | Raised when the user changes select value |
| onFocus          | function         | Raised when the select has received focus |
| onBlur           | function         | Raised when the select has left focus |
| onClear          | function         | Raised when the user clear value |

<h3>Example</h3>

<strong>Default using</strong>
```javascript
import { Component } from 'react';
import { Select } from 'ontime-components';

const data = [
  'Sansa Stark',
  'Arya Stark',
  'John Snow',
  'Rob Stark',
  'Bran Stark',
  'Daenerys Targaryen',
  'Tyrion Lannister'
];

class Test extends Component {

  render() {
    return (
      <Select 
        label="Hero"
        placeholder="select hero"
        dataSource={ async () => data }
      />
    );
  }

}
```

<strong>Searching</strong>
```javascript
import { Component } from 'react';
import { Select } from 'ontime-components';

const data = [
  'Sansa Stark',
  'Arya Stark',
  'John Snow',
  'Rob Stark',
  'Bran Stark',
  'Daenerys Targaryen',
  'Tyrion Lannister'
];

class Test extends Component {

  render() {
    return (
      <Select 
        label="Hero"
        placeholder="select hero"
        dataSource={ async params => {
          if (params.search) {
            return data.filter(item => item.toLowerCase().indexOf(params.search.toLowerCase()) >= 0);
          }

          return data;
        } }
      />
    );
  }

}
```

<strong>Custom item template</strong>
```javascript
import { Component } from 'react';
import { Select } from 'ontime-components';

const data = [
  'Sansa Stark',
  'Arya Stark',
  'John Snow',
  'Rob Stark',
  'Bran Stark',
  'Daenerys Targaryen',
  'Tyrion Lannister'
];

const customItemTpl = (item, selected, idx) => {
  if (selected) {
    return (<strong style={ {color: 'blue'} }>{ item }</strong>);
  } else {
    return item.name;
  }
};

class Test extends Component {

  render() {
    return (
      <Select 
        label="Hero"
        placeholder="select hero"
        customItemTpl={ customItemTpl }
        dataSource={ async () => data }
      />
    );
  }

}
```

<strong>mapValue and List of objects</strong>
```javascript
import { Component } from 'react';
import { Select } from 'ontime-components';

const data = [
  {name: 'Sansa Stark'},
  {name: 'Arya Stark'},
  {name: 'John Snow'},
  {name: 'Rob Stark'},
  {name: 'Bran Stark'},
  {name: 'Daenerys Targaryen'},
  {name: 'Tyrion Lannister'}
];

class Test extends Component {

  render() {
    return (
      <Select 
        label="Hero"
        placeholder="select hero"
        dataSource={ async () => data }
        mapValue="name"
        // or you can use function. Example below.
        mapValue={ item => item.name }
      />
    );
  }

}
```