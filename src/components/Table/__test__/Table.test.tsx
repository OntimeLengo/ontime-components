import React from 'react';
import { shallow } from 'enzyme';
import { Table } from '../Table';

describe('<Table />', () => {
  const mockData: any[] = [
    {id: 1, name: 'Text 1'},
    {id: 2, name: 'Text 2'},
  ];
  const head = () => {
    return (<tr><th>ID</th><th>Name</th></tr>);
  };
  const row = (item: any, idx: number) => {
    return (
      <tr key={ idx.toString() }>
        <td>{ item.id }</td>
        <td>{ item.name }</td>
      </tr>
    );
  };

  it('default', () => {
    const table = shallow(<Table data={ mockData } head={ head } row={ row } />);
    
    expect(table.find('table.ontime-table')).toHaveLength(1);
    expect(table.find('table.ontime-table th')).toHaveLength(2);
    expect(table.find('table.ontime-table td')).toHaveLength(4);
  });
});
