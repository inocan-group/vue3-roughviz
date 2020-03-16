/* eslint-disable @typescript-eslint/no-explicit-any */
import { onMounted, ref, watch } from '@vue/composition-api'
import { ExtractPropTypes } from '@/shared/util'
import { IChartOptions } from '@/shared/rough-viz'

interface IChartConstructor {
  new (config: any): any
}

export const useSetupRoughVizChart = <T extends IChartOptions = never>(
  Ctor: IChartConstructor,
  opts: ExtractPropTypes<{ [K in keyof T]: K extends keyof T ? T[K] : never }>,
) => {
  const chartdiv = ref<HTMLElement>(null)
  const uid = 'chartdiv' + Date.now()

  onMounted(() => {
    const el = chartdiv.value as HTMLElement
    el.id = uid

    watch(() => {
      const { chartData, ...otherOpts } = opts
      el.innerHTML = ''

      new Ctor({
        element: `#${el.id}`,
        ...{ data: chartData, ...otherOpts },
      })
    })
  })

  return chartdiv
}
