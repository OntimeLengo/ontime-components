import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import '../../../../build/style.css';
import { Button, TKind, TSize } from '../Button';
import Readme from '../readme.md';

const fnKindSize: any = withReadme(Readme, () => {
  const style = {marginTop: '10px', marginLeft: '10px'};

  return (
    <React.Fragment>
      { 
        [true, false].map((isPrimary, idx) => {
          return (
            <React.Fragment key={ idx.toString() }>
              {
                (['default', 'success', 'danger', 'warning', 'ghost', 'empty'] as TKind[]).map((kind: TKind, idx: number) => {
                  return (
                    <React.Fragment key={ idx.toString() }>
                      {
                        (['smaller', 'small', 'medium', 'large'] as TSize[]).map((size: TSize, idx: number) => {
                          return (
                            <Button 
                              key={ idx.toString() }
                              style={ style }
                              primary={ isPrimary }
                              label={ (isPrimary ? 'Primary ' : 'Common ') + kind + ' ' + size }
                              onClick={ action('clicked') }
                              kind={ kind }
                              size={ size }
                            />
                          );
                        })
                      }
                      <br />
                    </React.Fragment>
                  );
                })
              }
            </React.Fragment>
          );
        }) 
      }
    </React.Fragment>
  );
});

const fnIcons: any = withReadme(Readme, () => {
  const style = {marginTop: '10px', marginLeft: '10px'};

  return (
    <React.Fragment>
      <Button 
        style={ style }
        label="Left Icon"
        leftIcon="floppy-o"
      />
      <Button 
        style={ style }
        label="Right Icon"
        rightIcon="arrow-right"
      />
      <Button 
        style={ style }
        leftIcon="address-card-o"
      />
    </React.Fragment>
  );
});

const fnSpin: any = withReadme(Readme, () => {
  const style = {marginTop: '10px', marginLeft: '10px'};

  return (
    <React.Fragment>
      <Button 
        style={ style }
        label="Spin Left Icon"
        leftIcon="floppy-o"
        loading
      />
      <Button 
        style={ style }
        label="Saving..."
        loading
      />
    </React.Fragment>
  );
});

const fnDisabled: any = withReadme(Readme, () => {
  const style = {marginTop: '10px', marginLeft: '10px'};

  return (
    <React.Fragment>
      <Button 
        style={ style }
        label="Disabled"
        leftIcon="floppy-o"
        disabled
      />
    </React.Fragment>
  );
});

storiesOf('Button', module)
  .add('Buttons kind, size and onClick', fnKindSize)
  .add('Icons', fnIcons)
  .add('Spin', fnSpin)
  .add('Disabled', fnDisabled);
