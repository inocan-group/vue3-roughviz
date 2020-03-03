import { useAxisOptions } from './index'

export const useCommonBarChartOptions = () => ({
  ...useAxisOptions(),
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
})
