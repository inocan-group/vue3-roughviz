import StackedBarChart from './StackedBarChart.vue'
import { withKnobs, text, number, object } from '@storybook/addon-knobs'

export default { title: 'rough-viz/StackedBarChart', decorators: [withKnobs] }

export const example1 = () => ({
  components: { StackedBarChart },
  props: {
    chartData: {
      default: object('chartData', [
        { month: 'Jan', A: 20, B: 5 },
        { month: 'Feb', A: 25, B: 10 },
      ]),
    },
    labels: {
      default: text('labels', 'month'),
    },
  },
  template: '<stacked-bar-chart v-bind="$props" />',
})

export const example2 = () => ({
  components: { StackedBarChart },
  props: {
    chartData: {
      default: object('chartData', [
        { month: 'Jan', A: 20, B: 5, C: 10 },
        { month: 'Feb', A: 25, B: 10, C: 20 },
        { month: 'March', A: 30, B: 50, C: 10 },
      ]),
    },
    labels: {
      default: text('labels', 'month'),
    },
    title: {
      default: text('title', 'Monthly Revenue'),
    },
    height: {
      default: number('height', window.innerHeight * 0.7),
    },
    width: {
      default: number('width', window.innerWidth * 0.8),
    },
    roughness: {
      default: number('roughness', 2),
    },
    colors: {
      default: object('colors', ['blue', '#f996ae', 'skyblue', '#9ff4df']),
    },
    fillWeight: {
      default: number('fillWeight', 0.35),
    },
    strokeWidth: {
      default: number('strokeWidth', 0.5),
    },
    fillStyle: {
      default: text('fillStyle', 'cross-hatch'),
    },
    stroke: {
      default: text('stroke', 'black'),
    },
  },
  template: '<stacked-bar-chart v-bind="$props" />',
})
