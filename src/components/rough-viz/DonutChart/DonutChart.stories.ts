import DonutChart from './DonutChart.vue'
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs'

export default { title: 'rough-viz/DonutChart', decorators: [withKnobs] }

export const example1 = () => ({
  components: { DonutChart },
  props: {
    chartData: {
      default: object('chartData', {
        labels: ['a', 'b'],
        values: [10, 20],
      }),
    },
  },
  template: '<donut-chart v-bind="$props" />',
})

export const example2 = () => ({
  components: { DonutChart },
  props: {
    legend: {
      default: boolean('legend', false),
    },
    chartData: {
      default: object('chartData', {
        labels: ['JNCO Jeans', 'Sweat Pants', 'Jorts'],
        values: [20, 10, 2],
      }),
    },
    title: {
      default: text('title', 'Pants I Got Clowned On For Wearing In High School 😢'),
    },
    titleFontSize: {
      default: text('titleFontSize', '2rem'),
    },
    width: {
      default: number('width', window.innerWidth),
    },
    fillWeight: {
      default: number('fillWeight', 1.5),
    },
  },
  template: '<donut-chart v-bind="$props" />',
})
