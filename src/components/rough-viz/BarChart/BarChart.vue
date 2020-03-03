<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from '@vue/composition-api'
import { Bar } from 'rough-viz'
import { useCommonChartOptions, useCommonBarChartOptions } from '@/composables/rough-viz'

export default defineComponent({
  props: {
    ...useCommonChartOptions(),
    ...useCommonBarChartOptions(),
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
