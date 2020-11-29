# Bar

## API

Please refer to the [roughViz documentation](https://github.com/jwilber/roughViz#Bar) on the Bar chart API. Note that `element` is taken care of internally, while `data` is substituted with `chartData` to avoid conflicts with Vue internals.

## Examples

<!-- prettier-ignore -->
```vue
<template>
  <Bar :chart-data="chartData" />
</template>

<script>
import { defineComponent } from 'vue'
import { Bar } from 'vue3-roughviz'

export default defineComponent({
  components: { Bar },
  setup() {
    const chartData = { labels: ['a', 'b'], values: [10, 20] }

    return { chartData }
  },
})
</script>
```

<Bar :chart-data="{ labels: ['a', 'b'], values: [10, 20] }" />

<!-- prettier-ignore -->
```vue
<template>
  <Bar
  chart-data="https://gist.githubusercontent.com/mbostock/3310560/raw/98311dc46685ed02588afdcb69e5fa296febc1eb/letter-frequency.tsv"
  title="Letters"
  labels="letter"
  values="frequency"
  stroke="coral"
  :strokeWidth="3"
  color="pink"
  :fillWeight="1.5"
  :width="650"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { Bar } from 'vue3-roughviz'

export default defineComponent({
  components: { Bar },
})
</script>
```

<Bar
chart-data="https://gist.githubusercontent.com/mbostock/3310560/raw/98311dc46685ed02588afdcb69e5fa296febc1eb/letter-frequency.tsv"
title="Letters"
labels="letter"
values="frequency"
stroke="coral"
:strokeWidth="3"
color="pink"
:fillWeight="1.5"
:width="650"
/>
