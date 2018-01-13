import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module)
  .add('with default style', () => (
    <Button>Default</Button>
  ))
  .add('with primary style', () => (
    <Button primary>Primary</Button>
  ));
