const path = require('path');

module.exports = {
  title: 'vue-roughviz',
  description: 'Use the fun and informal charting capabilities of Rough-Viz charting in Vue.js',
  themeConfig: {
    nav: [
      {
        text: 'Install',
        link: '/',
      },
      {
        text: 'Overview',
        link: '/overview/',
      },
      {
        text: 'BarChart',
        link: '/bar-chart/',
      },
    ],
  },
  alias: {
    '/@/': path.resolve(__dirname, '../../src'),
    '/docs/': path.resolve(__dirname, '..'),
  },
};
