<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Bar } from 'rough-viz'
import { barChartOptions, IBarChartOptions } from '@/shared/rough-viz'
import { useSetupRoughVizChart } from '@/composables/rough-viz'

export default defineComponent({
  props: {
    ...barChartOptions,
  },
  setup(props) {
    const chartdiv = useSetupRoughVizChart<IBarChartOptions>(Bar, props)

    return { chartdiv }
  },
})
</script>
