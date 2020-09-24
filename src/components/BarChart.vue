<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Bar } from 'rough-viz'
import { barChartOptions } from '@/shared/index'
import { useSetupRoughVizChart } from '@/composables/index'

export default defineComponent({
  props: {
    ...barChartOptions,
  },
  setup(props) {
    const chartdiv = useSetupRoughVizChart(Bar, props)

    return { chartdiv }
  },
})
</script>
