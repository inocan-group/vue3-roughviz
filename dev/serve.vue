<script lang="ts">
import Vue from 'vue'
import { BarChart } from '@/entry'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    BarChart,
  },
  data: () => ({
    chartData: {
      labels: ['a', 'b'],
      values: [10, 20],
    },
  }),
})
</script>

<template>
  <div id="app">
    <bar-chart :chartData="chartData" />
  </div>
</template>
