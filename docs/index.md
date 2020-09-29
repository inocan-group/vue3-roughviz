---
sidebar: auto
---

# `vue-roughviz` documentation

## Adding to your Repo

To install the library simply go to the root of your repo and type:

```bash
# npm
npm install --save vue-roughviz
# yarn
yarn add vue-roughviz
```

### Core Dependencies

The core dependencies which this library depends on are:

1. [**RoughJS**](https://github.com/rough-stuff/rough) - builds the "rough" drawing lines
2. [**D3**](https://d3js.org) - provides critical charting capabilities

Both of these dependencies are brought together by the [`rough-viz`](https://github.com/jwilber/roughViz) library which means that this repo's primary responsibility is to expose [`rough-viz`](https://github.com/jwilber/roughViz) in a VueJS 3.0 friendly way.

### Reuse and Tree Shaking

Because **D3** is a commonly used library and to promote as much reuse as possible, the D3 dependency is defined as an "optional dependency" ... it's not _actually_ optional but by stating it as such means both `npm` and `yarn` will automatically install D3 for you as a direct dependency of your application. This ensures that d3 is optimally tree-shaken based on how your particular applications usage. It also means that you can use this library in your own code if you state it as a dependency directly. This will ensure D3 is reused across your app and this library and that the overall D3 library is tree-shaken to remove only those parts which are actually being used.

> **Note:** if you explicitly use D3, please be sure to use a `6.0.0` version of D3 (or greater) to ensure reuse is achieved

## Import from CDN

### Importing the Global Object

If you'd prefer to just import this library from a CDN (versus adding it to your build/bundling solution as descibed above) this is an option as well:

```html
<link >
```

### Importing a Native ES Module


### Importing a Web Component