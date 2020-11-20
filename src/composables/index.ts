/* eslint-disable @typescript-eslint/no-explicit-any */
import { onMounted, ref, watchEffect, Ref } from 'vue';
import { IChartConfig, IChart } from '../@types';

interface IChartConstructor<T extends IChart> {
  new (config: IChartConfig<T>): any;
}

export const useSetupRoughVizChart = <T extends IChart>(
  Ctor: IChartConstructor<T>,
  opts: T,
): Ref<HTMLElement | null> => {
  const chartdiv = ref<HTMLElement | null>(null);
  const uid = 'chartdiv' + Date.now();

  onMounted(() => {
    const el = chartdiv.value as HTMLElement;
    el.id = uid;

    watchEffect(() => {
      const { chartData, ...otherOpts } = opts;
      el.innerHTML = '';

      new Ctor({
        element: `#${el.id}`,
        ...{ data: chartData, ...otherOpts },
      });
    });
  });

  return chartdiv;
};
