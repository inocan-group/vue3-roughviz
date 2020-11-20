const path = require('path');

module.exports = {
  title: 'vue-roughviz',
  description: 'Use the fun and informal charting capabilities of Rough-Viz charting in Vue.js',
  themeConfig: {
    nav: [],
    sidebar: [
      { text: 'Getting Started', link: '/' },
      {
        text: 'Components',
        children: [
          { text: 'Bar', link: '/bar/index' },
          { text: 'BarH', link: '/bar-h/index' },
          { text: 'StackedBar', link: '/stacked-bar/index' },
          { text: 'Pie', link: '/pie/index' },
          { text: 'Donut', link: '/donut/index' },
          { text: 'Scatter', link: '/scatter/index' },
          { text: 'Line', link: '/line/index' },
        ],
      },
    ],
  },
  alias: {
    '/@/': path.resolve(__dirname, '../../src'),
    '/docs/': path.resolve(__dirname, '..'),
  },
};
