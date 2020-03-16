<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Pie } from 'rough-viz'
import { pieChartOptions, IPieChartOptions } from '@/shared/rough-viz'
import { useSetupRoughVizChart } from '@/composables/rough-viz'

export default defineComponent({
  props: {
    ...pieChartOptions,
  },
  setup(props) {
    const chartdiv = useSetupRoughVizChart<IPieChartOptions>(Pie, props)

    return { chartdiv }
  },
})
</script>
