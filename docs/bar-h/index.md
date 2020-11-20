---
data:
  labels:
    - '1992 Ford Aerostar Van'
    - '2013 Kia Rio'
    - '1980 Honda CB 125s'
    - '1992 Toyota Tercel'
  values:
    - 8
    - 4
    - 6
    - 2
---

# BarH

## API

Please refer to the [roughViz documentation](https://github.com/jwilber/roughViz#BarH) on the BarH chart API. Note that `element` is taken care of internally, while `data` is substituted with `chartData` to avoid conflicts with Vue internals.

## Examples

<!-- prettier-ignore -->
```vue
<template>
  <BarH :chart-data="chartData" />
</template>

<script>
import { defineComponent } from 'vue'
import { BarH } from 'vue3-roughviz'

export default defineComponent({
  components: { BarH },
  setup() {
    const chartData = { labels: ['a', 'b'], values: [10, 20] }

    return { chartData }
  },
})
</script>
```

\
<BarH :chart-data="{ labels: ['a', 'b'], values: [10, 20] }" />

<!-- prettier-ignore -->
```vue
<template>
  <BarH
  :chart-data="chartData"
  title="Vehicles I've Had"
  :legend="false"
  titleFontSize="1.5rem"
  :margin="{top: 50, bottom: 100, left: 160, right: 0}"
  xLabel="Time Owned (Years)"
  :strokeWidth="2"
  fillStyle="zigzag-line"
  highlight="gold"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { BarH } from 'vue3-roughviz'

export default defineComponent({
  components: { BarH },
  setup() {
    const chartData = {
      labels: ['1992 Ford Aerostar Van', '2013 Kia Rio', '1980 Honda CB 125s', '1992 Toyota Tercel'],
      values: [8, 4, 6, 2]
    }

    return { chartData }
  }
})
</script>
```

\
<BarH
:chart-data="$page.frontmatter.data"
title="Vehicles I've Had"
:legend="false"
titleFontSize="1.5rem"
:margin="{top: 50, bottom: 100, left: 160, right: 0}"
xLabel="Time Owned (Years)"
:strokeWidth="2"
fillStyle="zigzag-line"
highlight="gold"
/>
