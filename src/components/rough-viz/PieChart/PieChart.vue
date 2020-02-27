<template>
  <div class="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { Pie } from 'rough-viz'

export default defineComponent({
  setup() {
    onMounted(() => {
      new Pie({
        element: '.chartdiv',
        title: 'Was it useful?',
        titleFontSize: '1.5rem',
        legend: false,
        margin: { top: 50, bottom: 100, left: 40, right: 100 },
        data: {
          labels: ['useful', 'no', 'lol idk man'],
          values: [2, 8, 4],
        },
        strokeWidth: 3,
        fillStyle: 'zigzag-line',
        highlight: 'gold',
      })
    })
  },
})
</script>
