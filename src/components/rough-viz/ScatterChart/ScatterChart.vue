<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Scatter } from 'rough-viz'
import { scatterChartOptions, IScatterChartOptions } from '@/shared/rough-viz'
import { useSetupRoughVizChart } from '@/composables/rough-viz'

export default defineComponent({
  props: {
    ...scatterChartOptions,
  },
  setup(props) {
    const chartdiv = useSetupRoughVizChart<IScatterChartOptions>(Scatter, props)

    return { chartdiv }
  },
})
</script>
