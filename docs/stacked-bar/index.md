# StackedBar

## API

Please refer to the [roughViz documentation](https://github.com/jwilber/roughViz#StackedBar) on the StackedBar chart API. Note that `element` is taken care of internally, while `data` is substituted with `chartData` to avoid conflicts with Vue internals.

## Examples

<!-- prettier-ignore -->
```vue
<template>
  <StackedBar :chart-data="chartData" labels="month" />
</template>

<script>
import { defineComponent } from 'vue'
import { StackedBar } from 'vue3-roughviz'

export default defineComponent({
  components: { StackedBar },
  setup() {
    const chartData = [
       {month:'Jan', A:20, B: 5},
       {month:'Feb', A:25, B: 10},
   ]

    return { chartData }
  },
})
</script>
```

<StackedBar :chart-data="[ {month:'Jan', A:20, B: 5}, {month:'Feb', A:25, B: 10} ]" labels="month" />

<!-- prettier-ignore -->
```vue
<template>
  <StackedBar
  :chart-data="chartData"
  labels="month"
  title="Monthly Revenue"
  :roughness="2"
  :colors="['blue', '#f996ae', 'skyblue', '#9ff4df']"
  :fillWeight="0.35"
  :strokeWidth="0.5"
  fillStyle="cross-hatch"
  stroke="black"
  :width="600"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { StackedBar } from 'vue3-roughviz'

export default defineComponent({
  components: { StackedBar },
  setup() {
    const chartData = [
      {month:'Jan', A:20, B: 5,  C: 10},
      {month:'Feb', A:25, B: 10, C: 20},
      {month:'March', A:30, B:50, C:10}
    ]

    return { chartData }
  }
})
</script>
```

<StackedBar
:chart-data="[
  {month:'Jan', A:20, B: 5,  C: 10},
  {month:'Feb', A:25, B: 10, C: 20},
  {month:'March', A:30, B:50, C:10}
]"
labels="month"
title="Monthly Revenue"
:roughness="2"
:colors="['blue', '#f996ae', 'skyblue', '#9ff4df']"
:fillWeight="0.35"
:strokeWidth="0.5"
fillStyle="cross-hatch"
stroke="black"
:width="600"
/>
