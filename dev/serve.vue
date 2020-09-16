<script lang="ts">
import Vue from 'vue'
import { BarChart } from '@/entry'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    BarChart,
  },
})
</script>

<template>
  <div id="app">
    <bar-chart />
  </div>
</template>
