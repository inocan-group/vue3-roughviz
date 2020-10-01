---
title: BarChart
sidebar: auto
---
# `BarChart` Component

## Description
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Example

The chart below was rendered using the Usage demonstrated below. For a full list of parameters refer to the [parameters](#parameters) section.

<BarChart :chartData="{labels: ['a', 'b'], values: [10, 20]}" />

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
  },
  data() {
    return {
      chartData: {
        labels: ['a', 'b'], 
        values: [10, 20]
      }
    }
  }
})
```

## Parameters