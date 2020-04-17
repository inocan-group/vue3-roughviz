<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Bar } from 'rough-viz'
import { barChartOptions } from '@/shared'
import { useSetupRoughVizChart } from '@/composables/rough-viz'

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
