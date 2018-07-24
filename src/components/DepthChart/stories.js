import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import DepthChart from './DepthChart';
import * as README from './README.md';
import * as bidAsk from '../../jsons/bidAsk.json';

storiesOf('DepthChart', module)
  .addDecorator(withKnobs)
  .add(
    'Loading',
    withInfo({ text: README, source: false })(() => (
      <DepthChart data={bidAsk.list} loading={true} title="Price (BTC/USDT)" />
    ))
  )
  .add(
    'Not Loading',
    withInfo({ text: README, source: false })(() => (
      <DepthChart data={bidAsk.list} loading={false} title="Price (BTC/USDT)" />
    ))
  );