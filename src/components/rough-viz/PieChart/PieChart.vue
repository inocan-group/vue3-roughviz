<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from '@vue/composition-api'
import { Pie } from 'rough-viz'
import { commonChartOptions, commonPieChartOptions } from '@/shared/rough-viz'

export default defineComponent({
  props: {
    ...commonChartOptions,
    ...commonPieChartOptions,
  },
  setup(props) {
    const chartdiv = ref(null)
    const uid = 'chartdiv' + Date.now()

    onMounted(() => {
      const el = (chartdiv.value as unknown) as HTMLElement
      el.id = uid

      watch(() => {
        el.innerHTML = ''

        new Pie({
          element: `#${el.id}`,
          ...props,
        })
      })
    })

    return { chartdiv }
  },
})
</script>
