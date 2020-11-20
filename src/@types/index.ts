import {
  ExtractPropTypes,
  barChartOptions,
  stackedBarChartOptions,
  pieChartOptions,
  lineChartOptions,
  scatterChartOptions,
} from '../shared';

export type IBar = ExtractPropTypes<typeof barChartOptions>;
export type IStackedBar = ExtractPropTypes<typeof stackedBarChartOptions>;
export type IPie = ExtractPropTypes<typeof pieChartOptions>;
export type ILine = ExtractPropTypes<typeof lineChartOptions>;
export type IScatter = ExtractPropTypes<typeof scatterChartOptions>;

export type IChart = IBar | IStackedBar | IPie | ILine | IScatter;

export type IChartConfig<T extends IChart> = { element: string; data: T['chartData'] } & Omit<T, 'chartData'>;
