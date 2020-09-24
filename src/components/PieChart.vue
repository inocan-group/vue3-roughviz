<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Pie } from 'rough-viz'
import { pieChartOptions } from '@/shared'
import { useSetupRoughVizChart } from '@/composables'

export default defineComponent({
  props: {
    ...pieChartOptions,
  },
  setup(props) {
    const chartdiv = useSetupRoughVizChart(Pie, props)

    return { chartdiv }
  },
})
</script>
