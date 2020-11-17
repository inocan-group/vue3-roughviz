<script lang="ts">
import { defineComponent } from 'vue';
import BarChart from '/@/components/BarChart.vue';

export default defineComponent({
  name: 'ServeDev',
  components: { BarChart },
});
</script>

<template>
  <div id="app">
    <BarChart :chartData="{ labels: ['a', 'b'], values: [10, 20] }" />
  </div>
</template>
