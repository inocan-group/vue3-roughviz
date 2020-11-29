# Pie

## API

Please refer to the [roughViz documentation](https://github.com/jwilber/roughViz#Pie) on the Pie chart API. Note that `element` is taken care of internally, while `data` is substituted with `chartData` to avoid conflicts with Vue internals.

## Examples

<!-- prettier-ignore -->
```vue
<template>
  <Pie :chart-data="chartData" />
</template>

<script>
import { defineComponent } from 'vue'
import { Pie } from 'vue3-roughviz'

export default defineComponent({
  components: { Pie },
  setup() {
    const chartData = { labels: ['a', 'b'], values: [10, 20] }

    return { chartData }
  },
})
</script>
```

<Pie :chart-data="{ labels: ['a', 'b'], values: [10, 20] }" />

<!-- prettier-ignore -->
```vue
<template>
  <Pie
  :chart-data="chartData"
  title="'Yarn Plot': Useful?"
  titleFontSize="1.5rem"
  :margin="{top: 50, bottom: 100, left: 40, right: 100}"
  :strokeWidth="3"
  fillStyle="zigzag-line"
  highlight="gold"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { Pie } from 'vue3-roughviz'

export default defineComponent({
  components: { Pie },
  setup() {
    const chartData = {
      labels: ['useful', 'no', 'lol idk man'],
      values: [2, 8, 4]
    }

    return { chartData }
  }
})
</script>
```

<Pie
:chart-data="{
  labels: ['useful', 'no', 'lol idk man'],
  values: [2, 8, 4]
}"
title="'Yarn Plot': Useful?"
titleFontSize="1.5rem"
:margin="{top: 50, bottom: 100, left: 40, right: 100}"
:strokeWidth="3"
fillStyle="zigzag-line"
highlight="gold"
/>
