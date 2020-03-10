<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from '@vue/composition-api'
import { Bar } from 'rough-viz'
import { commonChartOptions, commonBarChartOptions } from '@/shared/rough-viz'

export default defineComponent({
  props: {
    ...commonChartOptions,
    ...commonBarChartOptions,
  },
  setup(props) {
    const chartdiv = ref(null)
    const uid = 'chartdiv' + Date.now()

    onMounted(() => {
      const el = (chartdiv.value as unknown) as HTMLElement
      el.id = uid

      watch(() => {
        el.innerHTML = ''

        new Bar({
          element: `#${el.id}`,
          ...props,
        })
      })
    })

    return { chartdiv }
  },
})
</script>
