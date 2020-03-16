import HorizontalBarChart from './HorizontalBarChart.vue'
import { withKnobs, text, number, object } from '@storybook/addon-knobs'

export default { title: 'rough-viz/HorizontalBarChart', decorators: [withKnobs] }

export const example1 = () => ({
  components: { HorizontalBarChart },
  props: {
    chartData: {
      default: object('chartData', {
        labels: ['a', 'b'],
        values: [10, 20],
      }),
    },
  },
  template: '<horizontal-bar-chart v-bind="$props" />',
})

export const example2 = () => ({
  components: { HorizontalBarChart },
  props: {
    chartData: {
      default: object('chartData', {
        labels: ['1992 Ford Aerostar Van', '2013 Kia Rio', '1980 Honda CB 125s', '1992 Toyota Tercel'],
        values: [8, 4, 6, 2],
      }),
    },
    title: {
      default: text('title', "Vehicles I've Had"),
    },
    titleFontSize: {
      default: text('titleFontSize', '1.5rem'),
    },
    margin: {
      default: object('margin', { top: 50, bottom: 100, left: 160, right: 0 }),
    },
    xLabel: {
      default: text('xLabel', 'Time Owned (Years)'),
    },
    strokeWidth: {
      default: number('strokeWidth', 2),
    },
    fillStyle: {
      default: text('fillStyle', 'zigzag-line'),
    },
    highlight: {
      default: text('highlight', 'gold'),
    },
  },
  template: '<horizontal-bar-chart v-bind="$props" />',
})

export const example3 = () => ({
  components: { HorizontalBarChart },
  props: {
    chartData: {
      default: text('chartData', 'https://raw.githubusercontent.com/jwilber/random_data/master/owTanks.csv'),
    },
    title: {
      default: text('title', 'Overwatch Tank Health'),
    },
    titleFontSize: {
      default: text('titleFontSize', '1.5rem'),
    },
    labels: {
      default: text('labels', 'name'),
    },
    values: {
      default: text('values', 'health'),
    },
    color: {
      default: text('color', 'tan'),
    },
    roughness: {
      default: number('roughness', 4),
    },
  },
  template: '<horizontal-bar-chart v-bind="$props" />',
})
