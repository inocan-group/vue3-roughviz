<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Scatter } from 'rough-viz'
import { scatterChartOptions } from '@/shared'
import { useSetupRoughVizChart } from '@/composables/rough-viz'

export default defineComponent({
  props: {
    ...scatterChartOptions,
  },
  setup(props) {
    const chartdiv = useSetupRoughVizChart(Scatter, props)

    return { chartdiv }
  },
})
</script>
