<script lang="ts">
import { defineComponent } from 'vue';
import Bar from '/@/components/Bar.vue';

export default defineComponent({
  name: 'ServeDev',
  components: { Bar },
});
</script>

<template>
  <div id="app">
    <Bar :chartData="{ labels: ['a', 'b'], values: [10, 20] }" />
  </div>
</template>
