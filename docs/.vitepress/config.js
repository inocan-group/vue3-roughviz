// const { ref } = require('vue')

module.exports = {
  title: 'vue-roughviz',
  description: 'Use the fun and informal charting capabilities of Rough-Viz charting in Vue.js',
  plugins: {
    'vuepress-plugin-mermaidjs': true,
  },

  markdown: {
    config: md => {
      console.log('i made it')
    },
  },

  themeConfig: {
    enhanceApp: ctx => {
      // const BarChart = require('../src/components/BarChart.vue')
      const BarChart = require('../../dist/es/index').BarChart
      ctx.app.component('BarChart', BarChart)
      ctx.app.use(BarChart)
      // ctx.siteData = ref({ foo: 1, bar: 2 })
    },
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
}
