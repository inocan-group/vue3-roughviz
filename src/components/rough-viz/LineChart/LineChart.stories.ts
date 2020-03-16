import LineChart from './LineChart.vue'
import { withKnobs, text, number, object } from '@storybook/addon-knobs'

export default { title: 'rough-viz/LineChart', decorators: [withKnobs] }

export const example1 = () => ({
  components: { LineChart },
  props: {
    chartData: {
      default: text('chartData', 'https://raw.githubusercontent.com/jwilber/random_data/master/profits.csv'),
    },
    y1: {
      default: text('y1', 'revenue'),
    },
    y2: {
      default: text('y2', 'cost'),
    },
    y3: {
      default: text('y3', 'profit'),
    },
  },
  template: '<line-chart v-bind="$props" />',
})

export const example2 = () => ({
  components: { LineChart },
  props: {
    chartData: {
      default: text('chartData', 'https://raw.githubusercontent.com/jwilber/random_data/master/tweets.csv'),
    },
    title: {
      default: text('title', 'Line Chart'),
    },
    y: {
      default: text('y', 'favorites'),
    },
    y2: {
      default: text('y2', 'retweets'),
    },
    y3: {
      default: text('y3', 'tweets'),
    },
    yLabel: {
      default: text('yLabel', 'hey'),
    },
    colorVar: {
      default: text('colorVar', 'continent'),
    },
    highlightLabel: {
      default: text('highlightLabel', 'country'),
    },
    highlight: {
      default: text('highlight', 'red'),
    },
    fillWeight: {
      default: number('fillWeight', 2),
    },
    roughness: {
      default: number('roughness', 3.5),
    },
    width: {
      default: number('width', window.innerWidth / 1.2),
    },
    height: {
      default: number('height', 500),
    },
  },
  template: '<line-chart v-bind="$props" />',
})
