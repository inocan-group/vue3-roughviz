import BarChart from './BarChart.vue'
import { withKnobs, text, number, object } from '@storybook/addon-knobs'

export default { title: 'rough-viz/BarChart', decorators: [withKnobs] }

export const example1 = () => ({
  components: { BarChart },
  props: {
    chartData: {
      default: object('chartData', {
        labels: ['a', 'b'],
        values: [10, 20],
      }),
    },
  },
  template: '<bar-chart v-bind="$props" />',
})

export const example2 = () => ({
  components: { BarChart },
  props: {
    chartData: {
      default: text(
        'chartData',
        'https://gist.githubusercontent.com/mbostock/3310560/raw/98311dc46685ed02588afdcb69e5fa296febc1eb/letter-frequency.tsv',
      ),
    },
    title: {
      default: text('title', 'Letters'),
    },
    labels: {
      default: text('labels', 'letter'),
    },
    values: {
      default: text('values', 'frequency'),
    },
    width: {
      default: number('width', window.innerWidth),
    },
    stroke: {
      default: text('stroke', 'coral'),
    },
    strokeWidth: {
      default: number('strokeWidth', 3),
    },
    color: {
      default: text('color', 'pink'),
    },
    fillWeight: {
      default: number('fillWeight', 1.5),
    },
  },
  template: '<bar-chart v-bind="$props" />',
})
