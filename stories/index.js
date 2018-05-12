import React from 'react';
import { storiesOf } from '@storybook/react';
import HelloWorld from '../src/HelloWorld';
import FunctionalComponent from '../src/FunctionalComponent';
import StatefulComponent from '../src/StatefulComponent';
import WithCSS from '../src/WithCSS';

storiesOf('HelloWorld', module)
  .add('simple rendering', () => (
    <HelloWorld />
  ))
;

storiesOf('Functional component', module)
  .add('without any props', () => (
    <FunctionalComponent />
  ))
  .add('with prop', () => (
    <FunctionalComponent  name="Dilip" />
  ))
;


storiesOf('Stateful component', module)
  .add('without any props', () => (
    <StatefulComponent />
  ))
  .add('with prop', () => (
    <StatefulComponent  name="Dilip" />
  ))
;


storiesOf('With CSS', module)
  .add('simple rendering', () => (
    <WithCSS />
  ))
;