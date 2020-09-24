<script lang="ts">
import { defineComponent } from 'vue'
import { BarChart } from '@/components/index'

export default defineComponent({
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
