# Getting Started

## Introuduction

`vue3-roughviz` is a set of Vue 3 wrapper components for the [roughViz](https://github.com/jwilber/roughViz) charting library.

## Installation

### NPM

```bash
npm install vue3-roughviz
# OR
yarn add vue3-roughviz
```

### CDN

Include the following script tag in your `index.html` (make sure to include it after Vue 3).

```html
<script src="https://unpkg.com/vue3-roughviz"></script>
```

## Your first chart

To create a chart import the relevant component from `vue3-roughviz` and register it. You can define your chart configuration options through props (please refer to the [roughViz documentation](https://github.com/jwilber/roughViz#api) for configuration options). Note that each configuration option has a corresponding prop. The two exceptions are `element` which is taken care of internally, and `data` which is substituted with `chartData` to avoid conflict with Vue's internals.

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

\
<Bar :chart-data="{ labels: ['a', 'b'], values: [10, 20] }" />
