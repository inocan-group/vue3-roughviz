import { PropType } from '@vue/composition-api'

const DEFAULT_LABEL_FONT_SIZE = '1rem'
const DEFAULT_HIGHLIGHT = 'coral'
const DEFAULT_PADDING = 0.1
const DEFAULT_STROKE = 'black'
const DEFAULT_COLORS = [
  'coral',
  'skyblue',
  '#66c2a5',
  'tan',
  '#8da0cb',
  '#e78ac3',
  '#a6d854',
  '#ffd92f',
  'tan',
  'orange',
]

const axisOptions = {
  axisFontSize: { type: String, default: '1rem' },
  axisRoughness: { type: Number, default: 0.5 },
  axisStrokeWidth: { type: Number, default: 0.5 },
  xLabel: String,
  yLabel: String,
}

const legendOptions = {
  legend: { type: Boolean, default: true },
  legendPosition: {
    type: String as PropType<'left' | 'right'>,
    default: 'right' as 'right',
  },
}

const commonChartOptions = {
  chartData: {
    type: [Object, String] as PropType<Record<string, (string | number)[]> | string>,
    required: true as true,
  },
  title: String,
  titleFontSize: { type: String, default: '1rem' },
  tooltipFontSize: { type: String, default: '0.95rem' },
  font: {
    type: [String, Number] as PropType<'gaegu' | 'indie flower' | 0 | 1>,
    default: 'gaegu' as 'gaegu',
  },
  fillStyle: {
    type: String as PropType<'hachure' | 'cross-hatch' | 'zigzag' | 'dashed' | 'solid' | 'zigzag-line'>,
    default: 'hachure' as 'hachure',
  },
  fillWeight: Number,
  roughness: { type: Number, default: 1 },
  bowing: { type: Number, default: 0 },
  simplification: { type: Number, default: 0.2 },
  interactive: { type: Boolean, default: true },
  width: Number,
  height: Number,
  margin: { type: Object as PropType<{ top: number; right: number; bottom: number; left: number }> },
  strokeWidth: { type: Number, default: 1 },
}

const commonBarChartOptions = {
  ...axisOptions,
  labels: String,
  values: String,
  highlight: { type: String, default: DEFAULT_HIGHLIGHT },
  innerStrokeWidth: { type: Number, default: 1 },
  labelFontSize: { type: String, default: DEFAULT_LABEL_FONT_SIZE },
  padding: { type: Number, default: DEFAULT_PADDING },
  stroke: { type: String, default: DEFAULT_STROKE },
}

const commonPieChartOptions = {
  ...legendOptions,
  labels: String,
  values: String,
  colors: { type: Array, default: DEFAULT_COLORS },
  highlight: { type: String, default: DEFAULT_HIGHLIGHT },
  innerStrokeWidth: { type: Number, default: 0.75 },
  padding: { type: Number, default: DEFAULT_PADDING },
}

const commonLineScatterChartOptions = {
  ...axisOptions,
  colors: { type: [Array, String], default: DEFAULT_COLORS },
  labelFontSize: { type: String, default: DEFAULT_LABEL_FONT_SIZE },
  stroke: { type: String, default: DEFAULT_STROKE },
}

export const barChartOptions = {
  ...commonChartOptions,
  ...commonBarChartOptions,
  color: { type: String, default: 'skyblue' },
}

export const stackedBarChartOptions = {
  ...commonChartOptions,
  ...commonBarChartOptions,
  colors: Array,
  chartData: { type: Array as PropType<Record<string, string | number>[]>, required: true as true },
  labels: { type: String, required: true as true },
}

export const pieChartOptions = {
  ...commonChartOptions,
  ...commonPieChartOptions,
}

export const lineChartOptions = {
  ...commonChartOptions,
  ...commonLineScatterChartOptions,
  ...legendOptions,
  chartData: { type: String, required: true as true },
  y: String,
  circle: { type: Boolean, default: true },
  circleRadius: { type: Number, default: 10 },
  circleRoughness: { type: Number, default: 2 },
}

export const scatterChartOptions = {
  ...commonChartOptions,
  ...commonLineScatterChartOptions,
  x: String,
  y: String,
  colorVar: String,
  curbZero: { type: Boolean, default: false },
  highlight: { type: String, default: DEFAULT_HIGHLIGHT },
  highlightLabel: String,
  innerStrokeWidth: { type: Number, default: 1 },
  radius: { type: [Number, Array] },
}
