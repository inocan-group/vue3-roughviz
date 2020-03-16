const axisOptions = {
  axisFontSize: String,
  axisRoughness: Number,
  axisStrokeWidth: Number,
  xLabel: String,
  yLabel: String,
}

const legendOptions = {
  legend: { type: Boolean, default: true },
  legendPosition: String,
}

const commonChartOptions = {
  chartData: {
    type: [Object, String],
    required: true,
  },
  title: String,
  titleFontSize: String,
  tooltipFontSize: String,
  font: { type: [String, Number] },
  fillStyle: String,
  fillWeight: Number,
  roughness: Number,
  bowing: Number,
  simplification: Number,
  interactive: { type: Boolean, default: true },
  width: Number,
  height: Number,
  margin: Object,
  strokeWidth: Number,
}

const commonBarChartOptions = {
  ...axisOptions,
  labels: String,
  values: String,
  highlight: String,
  innerStrokeWidth: Number,
  labelFontSize: String,
  padding: Number,
  stroke: String,
}

const commonPieChartOptions = {
  ...legendOptions,
  labels: String,
  values: String,
  colors: Array,
  highlight: String,
  innerStrokeWidth: Number,
  padding: Number,
}

const commonLineScatterChartOptions = {
  ...axisOptions,
  colors: { type: [Array, String] },
  labelFontSize: String,
  stroke: String,
}

export const barChartOptions = {
  ...commonChartOptions,
  ...commonBarChartOptions,
  color: String,
}

export const stackedBarChartOptions = {
  ...commonChartOptions,
  ...commonBarChartOptions,
  colors: Array,
  chartData: Array,
  labels: String,
}

export const pieChartOptions = {
  ...commonChartOptions,
  ...commonPieChartOptions,
}

export const lineChartOptions = {
  ...commonChartOptions,
  ...commonLineScatterChartOptions,
  ...legendOptions,
  chartData: { type: String, required: true },
  y: String,
  circle: { type: Boolean, default: true },
  circleRadius: Number,
  circleRoughness: Number,
}

export const scatterChartOptions = {
  ...commonChartOptions,
  ...commonLineScatterChartOptions,
  x: String,
  y: String,
  colorVar: String,
  curbZero: Boolean,
  highlight: String,
  highlightLabel: String,
  innerStrokeWidth: Number,
  radius: { type: [Number, Array] },
}

export type IBarChartOptions = typeof barChartOptions
export type IStackedBarChartOptions = typeof stackedBarChartOptions
export type IPieChartOptions = typeof pieChartOptions
export type ILineChartOptions = typeof lineChartOptions
export type IScatterChartOptions = typeof scatterChartOptions

export type IChartOptions =
  | IBarChartOptions
  | IStackedBarChartOptions
  | IPieChartOptions
  | ILineChartOptions
  | IScatterChartOptions
