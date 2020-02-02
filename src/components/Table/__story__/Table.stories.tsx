import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import '../../../../build/style.css';
import { Icon } from '../../Icon';
import { Table } from '../Table';
import Readme from '../readme.md';

const data: any[] = [
  {id: 1, name: 'Text 1', email: 'test1@test.com', active: true},
  {id: 2, name: 'Text 2', email: 'test2@test.com', active: false},
  {id: 3, name: 'Text 3', email: 'test3@test.com', active: true}
];

storiesOf('Table', module)
  .add('Default', (withReadme(Readme, () => {
    const style = {padding: '20px', width: '800px'};

    return (
      <React.Fragment>
        <div style={ style }>
          <Table 
            data={ data }
            head={ () => {
              return (
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Active</th>
                </tr>
              );
            } }
            row={ (item: any, idx: number) => {
              return (
                <tr key={ idx.toString() }>
                  <td>{ item.id }</td>
                  <td>{ item.name }</td>
                  <td>{ item.email }</td>
                  <td><Icon value={ item.active ? 'check' : 'times' } /></td>
                </tr>
              );
            } }
          />
        </div>
      </React.Fragment>
    );
  })) as any);
