import { useLegendOptions } from './index'

export const useCommonPieChartOptions = () => ({
  ...useLegendOptions(),
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
})
