<template>
  <div class="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { Donut } from 'rough-viz'

export default defineComponent({
  setup() {
    onMounted(() => {
      new Donut({
        element: '.chartdiv',
        legend: false,
        data: {
          labels: ['JNCO Jeans', 'Sweat Pants', 'Jorts'],
          values: [20, 10, 2],
        },
        title: 'Pants I Got Clowned On For Wearing In High School',
        titleFontSize: '2rem',
        labels: 'letter',
        values: 'frequency',
        width: window.innerWidth,
        stroke: 'coral',
        color: 'pink',
        fillWeight: 1.5,
      })
    })
  },
})
</script>
