# Scatter

## API

Please refer to the [roughViz documentation](https://github.com/jwilber/roughViz#Scatter) on the Scatter chart API. Note that `element` is taken care of internally, while `data` is substituted with `chartData` to avoid conflicts with Vue internals.

## Examples

<!-- prettier-ignore -->
```vue
<template>
  <Scatter :chart-data="chartData" />
</template>

<script>
import { defineComponent } from 'vue'
import { Scatter } from 'vue3-roughviz'

export default defineComponent({
  components: { Scatter },
  setup() {
    const chartData = { x: [1, 2, 35], y: [10, 20, 8] }

    return { chartData }
  },
})
</script>
```

<Scatter :chart-data="{ x: [1, 2, 35], y: [10, 20, 8] }" />

<!-- prettier-ignore -->
```vue
<template>
  <Scatter
  :chart-data="chartData"
  title="Some Random (x,y) Data"
  :width="400"
  :roughness="0"
  :radius="[25, 10, 40, 30, 60]"
  :fillWeight="3"
  :axisRoughness="1"
  :height="450"
  :colors="['green', 'red', 'blue', 'black']"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { Scatter } from 'vue3-roughviz'

export default defineComponent({
  components: { Scatter },
  setup() {
    const chartData = {
      x: [1, 2, 3, 7, 5, 9],
      y: [240, 40, 40, 160, 100],
    }

    return { chartData }
  }
})
</script>
```

<Scatter
:chart-data="{
  x: [1, 2, 3, 7, 5, 9],
  y: [240, 40, 40, 160, 100],
}"
title="Some Random (x,y) Data"
:width="400"
:roughness="0"
:radius="[25, 10, 40, 30, 60]"
:fillWeight="3"
:axisRoughness="1"
:height="450"
:colors="['green', 'red', 'blue', 'black']"
/>
