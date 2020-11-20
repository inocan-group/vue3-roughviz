<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Scatter } from '@inocan/rough-viz';
import { scatterChartOptions } from '../shared';
import { useSetupRoughVizChart } from '../composables';

export default defineComponent({
  props: {
    ...scatterChartOptions,
  },
  setup(props) {
    const chartdiv = useSetupRoughVizChart(Scatter, props);

    return { chartdiv };
  },
});
</script>
