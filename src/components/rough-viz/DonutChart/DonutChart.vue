<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Donut } from 'rough-viz'
import { pieChartOptions } from '@/shared'
import { useSetupRoughVizChart } from '@/composables/rough-viz'

export default defineComponent({
  props: {
    ...pieChartOptions,
  },
  setup(props) {
    const chartdiv = useSetupRoughVizChart(Donut, props)

    return { chartdiv }
  },
})
</script>
