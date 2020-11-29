# Line

## API

Please refer to the [roughViz documentation](https://github.com/jwilber/roughViz#Line) on the Line chart API. Note that `element` is taken care of internally, while `data` is substituted with `chartData` to avoid conflicts with Vue internals.

## Examples

<!-- prettier-ignore -->
```vue
<template>
  <Line
  chart-data="https://raw.githubusercontent.com/jwilber/random_data/master/profits.csv"
  y1="revenue"
  y2="cost"
  y3="profit"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { Line } from 'vue3-roughviz'

export default defineComponent({
  components: { Line },
})
</script>
```

<Line
chart-data="https://raw.githubusercontent.com/jwilber/random_data/master/profits.csv"
y1="revenue"
y2="cost"
y3="profit"
/>

<!-- prettier-ignore -->
```vue
<template>
  <Line
  chart-data="https://raw.githubusercontent.com/jwilber/random_data/master/tweets.csv"
  title="Line Chart"
  y="favorites"
  y2="retweets"
  y3="tweets"
  yLabel="hey"
  colorVar="continent"
  highlightLabel="country"
  highlight="red"
  fillWeight="2"
  roughness="3.5"
  :width="600"
  :height="500"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { Line } from 'vue3-roughviz'

export default defineComponent({
  components: { Line },
})
</script>
```

<Line
chart-data="https://raw.githubusercontent.com/jwilber/random_data/master/tweets.csv"
title="Line Chart"
y="favorites"
y2="retweets"
y3="tweets"
yLabel="hey"
colorVar="continent"
highlightLabel="country"
highlight="red"
fillWeight="2"
roughness="3.5"
:width="600"
:height="500"
/>
