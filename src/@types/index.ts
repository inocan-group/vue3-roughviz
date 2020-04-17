import {
  ExtractPropTypes,
  barChartOptions,
  stackedBarChartOptions,
  pieChartOptions,
  lineChartOptions,
  scatterChartOptions,
} from '@/shared'

export type IBarChart = ExtractPropTypes<typeof barChartOptions>
export type IStackedBarChart = ExtractPropTypes<typeof stackedBarChartOptions>
export type IPieChart = ExtractPropTypes<typeof pieChartOptions>
export type ILineChart = ExtractPropTypes<typeof lineChartOptions>
export type IScatterChart = ExtractPropTypes<typeof scatterChartOptions>

export type IChart = IBarChart | IStackedBarChart | IPieChart | ILineChart | IScatterChart

export type IChartConfig<T extends IChart> = { element: string; data: T['chartData'] } & Omit<T, 'chartData'>
