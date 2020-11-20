<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BarH } from '@inocan/rough-viz';
import { barChartOptions } from '../shared';
import { useSetupRoughVizChart } from '../composables';

export default defineComponent({
  props: {
    ...barChartOptions,
  },
  setup(props) {
    const chartdiv = useSetupRoughVizChart(BarH, props);

    return { chartdiv };
  },
});
</script>
