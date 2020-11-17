<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { Line } from 'rough-viz';
import { lineChartOptions } from '../shared';
import { useSetupRoughVizChart } from '../composables';

export default defineComponent({
  props: {
    ...lineChartOptions,
  },
  setup(props, context) {
    const opts = computed(() => {
      const attrs = context.attrs;
      const ys: Record<string, string> = {};

      // Get all numbered y axes whose name was passed as an attribute to be passed along with other props
      Object.keys(attrs).forEach(key => {
        const value = attrs[key];
        if (/^y\d+$/.test(key) && typeof value === 'string') {
          ys[key] = value;
        }
      });

      return { ...props, ...ys };
    });

    const chartdiv = useSetupRoughVizChart(Line, opts.value);

    return { chartdiv };
  },
});
</script>
