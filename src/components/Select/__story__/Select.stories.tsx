import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import '../../../../build/style.css';
import { Select } from '../Select';
import Readme from '../readme.md';

const dataStrings: any = [
  'Sansa Stark',
  'Arya Stark',
  'John Snow',
  'Rob Stark',
  'Bran Stark',
  'Daenerys Targaryen',
  'Tyrion Lannister'
];

const dataObjects: any = [
  {name: 'Sansa Stark'},
  {name: 'Arya Stark'},
  {name: 'John Snow'},
  {name: 'Rob Stark'},
  {name: 'Bran Stark'},
  {name: 'Daenerys Targaryen'},
  {name: 'Tyrion Lannister'}
];

storiesOf('Select', module)
  .add('Default', (withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};
    const dataSource = async () => dataStrings;

    return (
      <React.Fragment>
        <div style={ style }>
          <Select placeholder="select" dataSource={ dataSource } />
        </div>
      </React.Fragment>
    );
  })) as any)
  .add('Labels', (withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};
    const dataSource = async () => dataStrings;

    return (
      <React.Fragment>
        <div style={ style }>
          <Select label="Top" dataSource={ dataSource } />
        </div>
        <div style={ style }>
          <Select label="Left" labelPosition="left" dataSource={ dataSource } />
        </div>
        <div style={ style }>
          <Select label="Right" labelPosition="right" dataSource={ dataSource } />
        </div>
        <div style={ style }>
          <Select label="required" required dataSource={ dataSource } />
        </div>
      </React.Fragment>
    );
  })) as any)
  .add('Multiselect, clearable, disabled', (withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};
    const dataSource = async () => dataStrings;

    return (
      <React.Fragment>
        <div style={ style }>
          <Select multiple placeholder="select something" dataSource={ dataSource } />
        </div>
        <div style={ style }>
          <Select clearable placeholder="select something" dataSource={ dataSource } />
        </div>
        <div style={ style }>
          <Select multiple clearable placeholder="select something" dataSource={ dataSource } />
        </div>
        <div style={ style }>
          <Select 
            dataSource={ dataSource } 
            value="Arya Stark"
            placeholder="select something" 
            disabled
          />
        </div>
      </React.Fragment>
    );
  })) as any)
  .add('Predefined value', (withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};
    const dataSource = async () => dataStrings;

    return (
      <React.Fragment>
        <div style={ style }>
          <Select 
            dataSource={ dataSource } 
            value="Arya Stark"
            placeholder="select something" 
          />
        </div>
        <div style={ style }>
          <Select 
            dataSource={ dataSource } 
            value="Arya Stark"
            multiple 
            clearable 
            placeholder="select something"
          />
        </div>
      </React.Fragment>
    );
  })) as any)
  .add('AutoFetch, remote data, search', (withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};
    const dataSource = async () => dataStrings;
    const dataSourceRemote = () => {
      return new Promise((resolve: Function) => {
        setTimeout(resolve(dataStrings), 1000);
      });
    };
    const dataSourceSearch = async (params: any) => {
      if (params.search) {
        return dataStrings.filter((item: any) => item.toLowerCase().indexOf(params.search.toLowerCase()) >= 0);
      }

      return dataStrings;
    };

    return (
      <React.Fragment>
        <div style={ style }>
          <Select 
            autoFetch
            dataSource={ dataSource } 
            value="Arya Stark"
            placeholder="select something" 
          />
        </div>
        <div style={ style }>
          <Select 
            dataSource={ dataSourceRemote } 
            value="Arya Stark"
            placeholder="select something"
          />
        </div>
        <div style={ style }>
          <Select 
            dataSource={ dataSourceSearch }
            searchable 
            placeholder="select something" 
          />
        </div>
      </React.Fragment>
    );
  })) as any)
  .add('mapValue - Complex item of list', (withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};
    const dataSource = async () => dataObjects;

    return (
      <React.Fragment>
        <pre style={ style }>
          { 'example -> [{name: "Arya Stark"}, ...]' }
        </pre>
        <div style={ style }>
          <Select 
            dataSource={ dataSource } 
            value="Arya Stark"
            placeholder="select something"
            mapValue="name"
          />
        </div>
      </React.Fragment>
    );
  })) as any)
  .add('customItemTpl - Custom item template', (withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};
    const dataSource = async () => dataObjects;
    const customItemTpl = (item: any, selected: boolean) => {
      if (selected) {
        return (<strong style={ {color: 'blue'} }>{ item.name }</strong>);
      } else {
        return item.name;
      }
    };

    return (
      <React.Fragment>
        <div style={ style }>
          <Select 
            dataSource={ dataSource } 
            value={ dataObjects[0] }
            mapValue="name"
            placeholder="select something"
            customItemTpl={ customItemTpl }
          />
        </div>
        <div style={ style }>
          <Select 
            multiple
            dataSource={ dataSource } 
            value={ [dataObjects[0], dataObjects[3]] }
            mapValue="name"
            placeholder="select something"
            customItemTpl={ customItemTpl }
          />
        </div>
      </React.Fragment>
    );
  })) as any)
  .add('Size', (withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};
    const dataSource = async () => dataStrings;

    return (
      <React.Fragment>
        <div style={ style }>
          <Select 
            dataSource={ dataSource } 
            placeholder="select something" 
            size="smaller"
            label="smaller"
            labelPosition="left"
          />
        </div>
        <div style={ style }>
          <Select 
            dataSource={ dataSource } 
            placeholder="select something" 
            size="small"
            label="small"
            labelPosition="left"
          />
        </div>
        <div style={ style }>
          <Select 
            dataSource={ dataSource } 
            placeholder="select something" 
            size="medium"
            label="medium"
            labelPosition="left"
          />
        </div>
        <div style={ style }>
          <Select 
            dataSource={ dataSource } 
            placeholder="select something" 
            size="large"
            label="large"
            labelPosition="left"
          />
        </div>
      </React.Fragment>
    );
  })) as any)
  .add('Error', (withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};
    const dataSource = async () => dataStrings;

    return (
      <React.Fragment>
        <div style={ style }>
          <Select 
            dataSource={ dataSource } 
            placeholder="select something" 
            errors={ [
              'Some error 1',
              new Error('Some error 2')
            ] }
          />
        </div>
      </React.Fragment>
    );
  })) as any)
  .add('Events', (withReadme(Readme, () => {
    const style = {padding: '20px', width: '300px'};
    const dataSource = async () => dataStrings;

    const cbClick = action('click');
    const cbFocus = action('focus');
    const cbBlur = action('blur');
    const cbChange = action('change');

    return (
      <React.Fragment>
        <div style={ style }>
          <Select 
            dataSource={ dataSource } 
            placeholder="select something" 
            onClick={ cbClick }
            onChange={ cbChange }
            onFocus={ cbFocus }
            onBlur={ cbBlur }
          />
        </div>
      </React.Fragment>
    );
  })) as any);
