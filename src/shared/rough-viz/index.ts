const axisOptions = {
  axisFontSize: String,
  axisRoughness: Number,
  axisStrokeWidth: Number,
}

const legendOptions = {
  legend: Boolean,
  legendPosition: String,
}

export const commonChartOptions = {
  title: String,
  titleFontSize: String,
  tooltipFontSize: String,
  font: String,
  fillStyle: String,
  fillWeight: Number,
  roughness: Number,
  bowing: Number,
  simplification: Number,
  interactive: { type: Boolean, default: true },
  width: Number,
  height: Number,
  margin: Object,
}

export const commonBarChartOptions = {
  ...axisOptions,
  data: {
    type: [Object, String],
    required: true,
  },
  labels: String,
  values: String,
  color: String,
  highlight: String,
  innerStrokeWidth: Number,
  labelFontSize: String,
  padding: Number,
  stroke: String,
  strokeWidth: Number,
  xLabel: String,
  yLabel: String,
}

export const commonPieChartOptions = {
  ...legendOptions,
  data: {
    type: [Object, String],
    required: true,
  },
  labels: String,
  values: String,
  colors: Array,
  highlight: String,
  innerStrokeWidth: Number,
  padding: Number,
  strokeWidth: Number,
}
