<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { BarH } from 'rough-viz'
import { barChartOptions } from '@/shared'
import { useSetupRoughVizChart } from '@/composables/rough-viz'

export default defineComponent({
  props: {
    ...barChartOptions,
  },
  setup(props) {
    const chartdiv = useSetupRoughVizChart(BarH, props)

    return { chartdiv }
  },
})
</script>
