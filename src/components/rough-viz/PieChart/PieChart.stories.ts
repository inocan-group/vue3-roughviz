import PieChart from './PieChart.vue'
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs'

export default { title: 'rough-viz/PieChart', decorators: [withKnobs] }

export const example1 = () => ({
  components: { PieChart },
  props: {
    data: {
      default: object('data', {
        labels: ['a', 'b'],
        values: [10, 20],
      }),
    },
  },
  template: '<pie-chart v-bind="$props" />',
})

export const example2 = () => ({
  components: { PieChart },
  props: {
    legend: {
      default: boolean('legend', false),
    },
    data: {
      default: object('data', {
        labels: ['useful', 'no', 'lol idk man'],
        values: [2, 8, 4],
      }),
    },
    title: {
      default: text('title', 'Was it useful? 🤔'),
    },
    titleFontSize: {
      default: text('titleFontSize', '1.5rem'),
    },
    strokeWidth: {
      default: number('strokeWidth', 3),
    },
    fillStyle: {
      default: text('fillStyle', 'zigzag-line'),
    },
    highlight: {
      default: text('highlight', 'gold'),
    },
    margin: {
      default: object('margin', { top: 50, bottom: 100, left: 40, right: 100 }),
    },
  },
  template: '<pie-chart v-bind="$props" />',
})
