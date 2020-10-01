import { ref, onMounted, watchEffect, defineComponent, openBlock, createBlock, computed } from 'vue';
import { Bar, Donut, BarH, Line, Pie, Scatter, StackedBar } from 'rough-viz';

const DEFAULT_LABEL_FONT_SIZE = '1rem';
const DEFAULT_HIGHLIGHT = 'coral';
const DEFAULT_PADDING = 0.1;
const DEFAULT_STROKE = 'black';
const DEFAULT_COLORS = [
    'coral',
    'skyblue',
    '#66c2a5',
    'tan',
    '#8da0cb',
    '#e78ac3',
    '#a6d854',
    '#ffd92f',
    'tan',
    'orange',
];
const axisOptions = {
    axisFontSize: { type: String, default: '1rem' },
    axisRoughness: { type: Number, default: 0.5 },
    axisStrokeWidth: { type: Number, default: 0.5 },
    xLabel: String,
    yLabel: String,
};
const legendOptions = {
    legend: { type: Boolean, default: true },
    legendPosition: {
        type: String,
        default: 'right',
    },
};
const commonChartOptions = {
    chartData: {
        type: [Object, String],
        required: true,
    },
    title: String,
    titleFontSize: { type: String, default: '1rem' },
    tooltipFontSize: { type: String, default: '0.95rem' },
    font: {
        type: [String, Number],
        default: 'gaegu',
    },
    fillStyle: {
        type: String,
        default: 'hachure',
    },
    fillWeight: Number,
    roughness: { type: Number, default: 1 },
    bowing: { type: Number, default: 0 },
    simplification: { type: Number, default: 0.2 },
    interactive: { type: Boolean, default: true },
    width: Number,
    height: Number,
    margin: { type: Object },
    strokeWidth: { type: Number, default: 1 },
};
const commonBarChartOptions = Object.assign(Object.assign({}, axisOptions), { labels: String, values: String, highlight: { type: String, default: DEFAULT_HIGHLIGHT }, innerStrokeWidth: { type: Number, default: 1 }, labelFontSize: { type: String, default: DEFAULT_LABEL_FONT_SIZE }, padding: { type: Number, default: DEFAULT_PADDING }, stroke: { type: String, default: DEFAULT_STROKE } });
const commonPieChartOptions = Object.assign(Object.assign({}, legendOptions), { labels: String, values: String, colors: { type: Array, default: DEFAULT_COLORS }, highlight: { type: String, default: DEFAULT_HIGHLIGHT }, innerStrokeWidth: { type: Number, default: 0.75 }, padding: { type: Number, default: DEFAULT_PADDING } });
const commonLineScatterChartOptions = Object.assign(Object.assign({}, axisOptions), { colors: { type: [Array, String], default: DEFAULT_COLORS }, labelFontSize: { type: String, default: DEFAULT_LABEL_FONT_SIZE }, stroke: { type: String, default: DEFAULT_STROKE } });
const barChartOptions = Object.assign(Object.assign(Object.assign({}, commonChartOptions), commonBarChartOptions), { color: { type: String, default: 'skyblue' } });
const stackedBarChartOptions = Object.assign(Object.assign(Object.assign({}, commonChartOptions), commonBarChartOptions), { colors: Array, chartData: { type: Array, required: true }, labels: { type: String, required: true } });
const pieChartOptions = Object.assign(Object.assign({}, commonChartOptions), commonPieChartOptions);
const lineChartOptions = Object.assign(Object.assign(Object.assign(Object.assign({}, commonChartOptions), commonLineScatterChartOptions), legendOptions), { chartData: { type: String, required: true }, y: String, circle: { type: Boolean, default: true }, circleRadius: { type: Number, default: 10 }, circleRoughness: { type: Number, default: 2 } });
const scatterChartOptions = Object.assign(Object.assign(Object.assign({}, commonChartOptions), commonLineScatterChartOptions), { x: String, y: String, colorVar: String, curbZero: { type: Boolean, default: false }, highlight: { type: String, default: DEFAULT_HIGHLIGHT }, highlightLabel: String, innerStrokeWidth: { type: Number, default: 1 }, radius: { type: [Number, Array] } });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const useSetupRoughVizChart = (Ctor, opts) => {
    const chartdiv = ref(null);
    const uid = 'chartdiv' + Date.now();
    onMounted(() => {
        const el = chartdiv.value;
        el.id = uid;
        watchEffect(() => {
            const { chartData } = opts, otherOpts = __rest(opts, ["chartData"]);
            el.innerHTML = '';
            new Ctor(Object.assign({ element: `#${el.id}` }, Object.assign({ data: chartData }, otherOpts)));
        });
    });
    return chartdiv;
};

var script = defineComponent({
    props: Object.assign({}, barChartOptions),
    setup(props) {
        const chartdiv = useSetupRoughVizChart(Bar, props);
        return { chartdiv };
    },
});

const _hoisted_1 = { ref: "chartdiv" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1, null, 512 /* NEED_PATCH */))
}

script.render = render;
script.__file = "src/components/BarChart.vue";

var script$1 = defineComponent({
    props: Object.assign({}, pieChartOptions),
    setup(props) {
        const chartdiv = useSetupRoughVizChart(Donut, props);
        return { chartdiv };
    },
});

const _hoisted_1$1 = { ref: "chartdiv" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$1, null, 512 /* NEED_PATCH */))
}

script$1.render = render$1;
script$1.__file = "src/components/DonutChart.vue";

var script$2 = defineComponent({
    props: Object.assign({}, barChartOptions),
    setup(props) {
        const chartdiv = useSetupRoughVizChart(BarH, props);
        return { chartdiv };
    },
});

const _hoisted_1$2 = { ref: "chartdiv" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$2, null, 512 /* NEED_PATCH */))
}

script$2.render = render$2;
script$2.__file = "src/components/HorizontalBarChart.vue";

var script$3 = defineComponent({
    props: Object.assign({}, lineChartOptions),
    setup(props, context) {
        const opts = computed(() => {
            const attrs = context.attrs;
            const ys = {};
            // Get all numbered y axes whose name was passed as an attribute to be passed along with other props
            Object.keys(attrs).forEach(key => {
                const value = attrs[key];
                if (/^y\d+$/.test(key) && typeof value === 'string') {
                    ys[key] = value;
                }
            });
            return Object.assign(Object.assign({}, props), ys);
        });
        const chartdiv = useSetupRoughVizChart(Line, opts.value);
        return { chartdiv };
    },
});

const _hoisted_1$3 = { ref: "chartdiv" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$3, null, 512 /* NEED_PATCH */))
}

script$3.render = render$3;
script$3.__file = "src/components/LineChart.vue";

var script$4 = defineComponent({
    props: Object.assign({}, pieChartOptions),
    setup(props) {
        const chartdiv = useSetupRoughVizChart(Pie, props);
        return { chartdiv };
    },
});

const _hoisted_1$4 = { ref: "chartdiv" };

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$4, null, 512 /* NEED_PATCH */))
}

script$4.render = render$4;
script$4.__file = "src/components/PieChart.vue";

var script$5 = defineComponent({
    props: Object.assign({}, scatterChartOptions),
    setup(props) {
        const chartdiv = useSetupRoughVizChart(Scatter, props);
        return { chartdiv };
    },
});

const _hoisted_1$5 = { ref: "chartdiv" };

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$5, null, 512 /* NEED_PATCH */))
}

script$5.render = render$5;
script$5.__file = "src/components/ScatterChart.vue";

var script$6 = defineComponent({
    props: Object.assign({}, stackedBarChartOptions),
    setup(props) {
        const chartdiv = useSetupRoughVizChart(StackedBar, props);
        return { chartdiv };
    },
});

const _hoisted_1$6 = { ref: "chartdiv" };

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$6, null, 512 /* NEED_PATCH */))
}

script$6.render = render$6;
script$6.__file = "src/components/StackedBarChart.vue";

export { script as BarChart, script$1 as DonutChart, script$2 as HorizontalBarChart, script$3 as LineChart, script$4 as PieChart, script$5 as ScatterChart, script$6 as StackedBarChart };
