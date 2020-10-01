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
export const barChartOptions = Object.assign(Object.assign(Object.assign({}, commonChartOptions), commonBarChartOptions), { color: { type: String, default: 'skyblue' } });
export const stackedBarChartOptions = Object.assign(Object.assign(Object.assign({}, commonChartOptions), commonBarChartOptions), { colors: Array, chartData: { type: Array, required: true }, labels: { type: String, required: true } });
export const pieChartOptions = Object.assign(Object.assign({}, commonChartOptions), commonPieChartOptions);
export const lineChartOptions = Object.assign(Object.assign(Object.assign(Object.assign({}, commonChartOptions), commonLineScatterChartOptions), legendOptions), { chartData: { type: String, required: true }, y: String, circle: { type: Boolean, default: true }, circleRadius: { type: Number, default: 10 }, circleRoughness: { type: Number, default: 2 } });
export const scatterChartOptions = Object.assign(Object.assign(Object.assign({}, commonChartOptions), commonLineScatterChartOptions), { x: String, y: String, colorVar: String, curbZero: { type: Boolean, default: false }, highlight: { type: String, default: DEFAULT_HIGHLIGHT }, highlightLabel: String, innerStrokeWidth: { type: Number, default: 1 }, radius: { type: [Number, Array] } });
//# sourceMappingURL=index.js.map