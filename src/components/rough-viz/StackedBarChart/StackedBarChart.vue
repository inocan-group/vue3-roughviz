<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { StackedBar } from 'rough-viz'
import { stackedBarChartOptions, IStackedBarChartOptions } from '@/shared/rough-viz'
import { useSetupRoughVizChart } from '@/composables/rough-viz'

export default defineComponent({
  props: {
    ...stackedBarChartOptions,
  },
  setup(props) {
    const chartdiv = useSetupRoughVizChart<IStackedBarChartOptions>(StackedBar, props)

    return { chartdiv }
  },
})
</script>
