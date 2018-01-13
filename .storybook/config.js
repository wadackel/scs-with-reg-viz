import { configure, addDecorator } from '@storybook/react';
import { initScreenshot } from 'storybook-chrome-screenshot';

// Initialize `storybook-chrome-screenshot`
addDecorator(initScreenshot());

// Load stories
const req = require.context('../src', true, /\.stories\.js$/);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
