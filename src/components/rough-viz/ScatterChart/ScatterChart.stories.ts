import ScatterChart from './ScatterChart.vue'
import { withKnobs, text, number, object, boolean } from '@storybook/addon-knobs'

export default { title: 'rough-viz/ScatterChart', decorators: [withKnobs] }

export const example1 = () => ({
  components: { ScatterChart },
  props: {
    chartData: {
      default: object('chartData', {
        x: [1, 2, 35],
        y: [10, 20, 8],
      }),
    },
  },
  template: '<scatter-chart v-bind="$props" />',
})

export const example2 = () => ({
  components: { ScatterChart },
  props: {
    chartData: {
      default: text('chartData', 'https://raw.githubusercontent.com/uiuc-cse/data-fa14/gh-pages/data/iris.csv'),
    },
    title: {
      default: text('title', 'Iris Scatter Plot'),
    },
    x: {
      default: text('x', 'sepal_width'),
    },
    y: {
      default: text('y', 'petal_length'),
    },
    colorVar: {
      default: text('colorVar', 'species'),
    },
    highlightLabel: {
      default: text('highlightLabel', 'species'),
    },
    fillWeight: {
      default: number('fillweight', 4),
    },
    radius: {
      default: number('radius', 12),
    },
    colors: {
      default: object('colors', ['pink', 'coral', 'skyblue']),
    },
    stroke: {
      default: text('stroke', 'black'),
    },
    strokeWidth: {
      default: number('strokeWidth', 0.4),
    },
    roughness: {
      default: number('roughness', 1),
    },
    width: {
      default: number('width', 400),
    },
    height: {
      default: number('height', 450),
    },
    font: {
      default: number('font', 0),
    },
    xLabel: {
      default: text('xLabel', 'sepal width'),
    },
    yLabel: {
      default: text('yLabel', 'petal length'),
    },
    curbZero: {
      default: boolean('curbZero', false),
    },
  },
  template: '<scatter-chart v-bind="$props" />',
})

export const example3 = () => ({
  components: { ScatterChart },
  props: {
    chartData: {
      default: object('chartData', {
        x: [1, 2, 3, 7, 5, 9],
        y: [240, 40, 40, 160, 100],
      }),
    },
    title: {
      default: text('title', 'Some Random (x,y) Data'),
    },
    width: {
      default: number('width', 400),
    },
    height: {
      default: number('height', 450),
    },
    roughness: {
      default: number('roughness', 0),
    },
    radius: {
      default: object('radius', [25, 10, 40, 30, 60]),
    },
    fillWeight: {
      default: number('fillweight', 3),
    },
    axisRoughness: {
      default: number('axisRoughness', 1),
    },
    colors: {
      default: object('colors', ['green', 'red', 'blue', 'black']),
    },
  },
  template: '<scatter-chart v-bind="$props" />',
})
