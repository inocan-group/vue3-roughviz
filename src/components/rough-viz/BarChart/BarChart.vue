<template>
  <div class="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { Bar } from 'rough-viz'

export default defineComponent({
  setup() {
    onMounted(() => {
      new Bar({
        element: '.chartdiv',
        data:
          'https://gist.githubusercontent.com/mbostock/3310560/raw/98311dc46685ed02588afdcb69e5fa296febc1eb/letter-frequency.tsv',
        title: 'Letters',
        labels: 'letter',
        values: 'frequency',
        width: window.innerWidth,
        stroke: 'coral',
        strokeWidth: 3,
        color: 'pink',
        fillWeight: 1.5,
      })
    })
  },
})
</script>
