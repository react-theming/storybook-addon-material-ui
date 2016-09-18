import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { sayHello } from '../src';

storiesOf('Button', module)
  .add('Hello World', () => (
    <button onClick={sayHello('Hello World')}>Say "Hello World"</button>
  ))
  .add('Hello Earth', () => (
    <button onClick={sayHello('Hello Earth')}>Say "Hello Earth"</button>
  ));
