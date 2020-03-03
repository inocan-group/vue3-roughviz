<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from '@vue/composition-api'
import { Donut } from 'rough-viz'
import { useCommonChartOptions, useCommonPieChartOptions } from '@/composables/rough-viz'

export default defineComponent({
  props: {
    ...useCommonChartOptions(),
    ...useCommonPieChartOptions(),
  },
  setup(props) {
    const chartdiv = ref(null)
    const uid = 'chartdiv' + Date.now()

    onMounted(() => {
      const el = (chartdiv.value as unknown) as HTMLElement
      el.id = uid

      watch(() => {
        el.innerHTML = ''

        new Donut({
          element: `#${el.id}`,
          ...props,
        })
      })
    })

    return { chartdiv }
  },
})
</script>
