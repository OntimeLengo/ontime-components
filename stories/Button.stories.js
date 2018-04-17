import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme } from 'storybook-readme';

import '../dist/main.css';
import { Button } from '../src';

import Readme from '../src/components/Button/readme.md';

storiesOf('Button', module)
  .add('Buttons kind, size and onClick', withReadme(Readme, () => {
    const style = {marginTop: '10px', marginLeft: '10px'};

    return (
      <React.Fragment>
        { 
          [true, false].map((isPrimary, idx) => {
            return (
              <React.Fragment key={ idx }>
                {
                  ['default', 'success', 'danger', 'warning', 'ghost'].map((kind, idx) => {
                    return (
                      <React.Fragment key={ idx }>
                        {
                          ['smaller', 'small', 'medium', 'large'].map((size, idx) => {
                            return (
                              <Button 
                                key={ idx }
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
  }))
  .add('Icons', withReadme(Readme, () => {
    const style = {marginTop: '10px', marginLeft: '10px'};

    return (
      <React.Fragment>
        <Button 
          style={ style }
          label="left icon"
          leftIcon="floppy-o"
        />
        <Button 
          style={ style }
          label="right icon"
          rightIcon="arrow-right"
        />
        <Button 
          style={ style }
          leftIcon="address-card-o"
        />
      </React.Fragment>
    );
  }))
  .add('Spin', withReadme(Readme, () => {
    const style = {marginTop: '10px', marginLeft: '10px'};

    return (
      <React.Fragment>
        <Button 
          style={ style }
          label="spin left icon"
          leftIcon="floppy-o"
          loading
        />
        <Button 
          style={ style }
          label="saving..."
          loading
        />
      </React.Fragment>
    );
  }))
  .add('Disabled', withReadme(Readme, () => {
    const style = {marginTop: '10px', marginLeft: '10px'};

    return (
      <React.Fragment>
        <Button 
          style={ style }
          label="disabled"
          leftIcon="floppy-o"
          disabled
        />
      </React.Fragment>
    );
  }));