# Donut

## API

Please refer to the [roughViz documentation](https://github.com/jwilber/roughViz#Donut) on the Donut chart API. Note that `element` is taken care of internally, while `data` is substituted with `chartData` to avoid conflicts with Vue internals.

## Examples

<!-- prettier-ignore -->
```vue
<template>
  <Donut :chart-data="chartData" />
</template>

<script>
import { defineComponent } from 'vue'
import { Donut } from 'vue3-roughviz'

export default defineComponent({
  components: { Donut },
  setup() {
    const chartData = { labels: ['a', 'b'], values: [10, 20] }

    return { chartData }
  },
})
</script>
```

\
<Donut :chart-data="{ labels: ['a', 'b'], values: [10, 20] }" />

<!-- prettier-ignore -->
```vue
<template>
  <Donut
  :chart-data="chartData"
  :legend="false"
  title="Pants I Got Clowned On For Wearing In High School"
  titleFontSize="1.5rem"
  labels="letter"
  values="frequency"
  :width="600"
  stroke="coral"
  color="pink"
  :fillWeight="1.5"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { Donut } from 'vue3-roughviz'

export default defineComponent({
  components: { Donut },
  setup() {
    const chartData = {
      labels: ['JNCO Jeans', 'Sweat Pants', 'Jorts'],
      values: [20, 10, 2]
    }

    return { chartData }
  }
})
</script>
```

\
<Donut
:chart-data="{
  labels: ['JNCO Jeans', 'Sweat Pants', 'Jorts'],
  values: [20, 10, 2]
}"
:legend="false"
title="Pants I Got Clowned On For Wearing In High School"
titleFontSize="1.5rem"
labels="letter"
values="frequency"
:width="600"
stroke="coral"
color="pink"
:fillWeight="1.5"
/>
