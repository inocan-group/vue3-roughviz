# `BarChart` Component

## Description

## Example

<BarChart />

## Usage

Template section:

```html
  <BarChart 
    :chartData="chartData"
  />
```
Code section:

```typescript
import { createApp } from 'vue';
import { BarChart } from 'vue-roughviz';

const app = createApp();
app.component('App', {
  components: {
    BarChart
  }
})
```

