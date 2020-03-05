<template>
  <div ref="chartdiv"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref, watch } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const chartdiv = ref(null)

    onMounted(() => {
     
    })

    onBeforeUnmount(() => {
     
    })

    return { chartdiv }
  },
})
</script>
