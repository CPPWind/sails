import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);
// automatically import all files ending in *.stories.js
//const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  // req.keys().forEach(filename => req(filename));
  require('../stories')
}

configure(loadStories, module);
