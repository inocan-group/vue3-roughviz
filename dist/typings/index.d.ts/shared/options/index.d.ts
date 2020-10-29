import { PropType } from 'vue';
export declare const barChartOptions: {
    color: {
        type: StringConstructor;
        default: string;
    };
    labels: StringConstructor;
    values: StringConstructor;
    highlight: {
        type: StringConstructor;
        default: string;
    };
    innerStrokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    labelFontSize: {
        type: StringConstructor;
        default: string;
    };
    padding: {
        type: NumberConstructor;
        default: number;
    };
    stroke: {
        type: StringConstructor;
        default: string;
    };
    axisFontSize: {
        type: StringConstructor;
        default: string;
    };
    axisRoughness: {
        type: NumberConstructor;
        default: number;
    };
    axisStrokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    xLabel: StringConstructor;
    yLabel: StringConstructor;
    chartData: {
        type: PropType<string | Record<string, (string | number)[]>>;
        required: boolean;
    };
    title: StringConstructor;
    titleFontSize: {
        type: StringConstructor;
        default: string;
    };
    tooltipFontSize: {
        type: StringConstructor;
        default: string;
    };
    font: {
        type: PropType<0 | 1 | "gaegu" | "indie flower">;
        default: string;
    };
    fillStyle: {
        type: PropType<"dashed" | "solid" | "hachure" | "cross-hatch" | "zigzag" | "zigzag-line">;
        default: "hachure";
    };
    fillWeight: NumberConstructor;
    roughness: {
        type: NumberConstructor;
        default: number;
    };
    bowing: {
        type: NumberConstructor;
        default: number;
    };
    simplification: {
        type: NumberConstructor;
        default: number;
    };
    interactive: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: NumberConstructor;
    height: NumberConstructor;
    margin: {
        type: PropType<{
            top: number;
            right: number;
            bottom: number;
            left: number;
        }>;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
};
export declare const stackedBarChartOptions: {
    colors: ArrayConstructor;
    chartData: {
        type: PropType<Record<string, string | number>[]>;
        required: true;
    };
    labels: {
        type: StringConstructor;
        required: true;
    };
    values: StringConstructor;
    highlight: {
        type: StringConstructor;
        default: string;
    };
    innerStrokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    labelFontSize: {
        type: StringConstructor;
        default: string;
    };
    padding: {
        type: NumberConstructor;
        default: number;
    };
    stroke: {
        type: StringConstructor;
        default: string;
    };
    axisFontSize: {
        type: StringConstructor;
        default: string;
    };
    axisRoughness: {
        type: NumberConstructor;
        default: number;
    };
    axisStrokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    xLabel: StringConstructor;
    yLabel: StringConstructor;
    title: StringConstructor;
    titleFontSize: {
        type: StringConstructor;
        default: string;
    };
    tooltipFontSize: {
        type: StringConstructor;
        default: string;
    };
    font: {
        type: PropType<0 | 1 | "gaegu" | "indie flower">;
        default: string;
    };
    fillStyle: {
        type: PropType<"dashed" | "solid" | "hachure" | "cross-hatch" | "zigzag" | "zigzag-line">;
        default: "hachure";
    };
    fillWeight: NumberConstructor;
    roughness: {
        type: NumberConstructor;
        default: number;
    };
    bowing: {
        type: NumberConstructor;
        default: number;
    };
    simplification: {
        type: NumberConstructor;
        default: number;
    };
    interactive: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: NumberConstructor;
    height: NumberConstructor;
    margin: {
        type: PropType<{
            top: number;
            right: number;
            bottom: number;
            left: number;
        }>;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
};
export declare const pieChartOptions: {
    labels: StringConstructor;
    values: StringConstructor;
    colors: {
        type: ArrayConstructor;
        default: string[];
    };
    highlight: {
        type: StringConstructor;
        default: string;
    };
    innerStrokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    padding: {
        type: NumberConstructor;
        default: number;
    };
    legend: {
        type: BooleanConstructor;
        default: boolean;
    };
    legendPosition: {
        type: PropType<"left" | "right">;
        default: string;
    };
    chartData: {
        type: PropType<string | Record<string, (string | number)[]>>;
        required: boolean;
    };
    title: StringConstructor;
    titleFontSize: {
        type: StringConstructor;
        default: string;
    };
    tooltipFontSize: {
        type: StringConstructor;
        default: string;
    };
    font: {
        type: PropType<0 | 1 | "gaegu" | "indie flower">;
        default: string;
    };
    fillStyle: {
        type: PropType<"dashed" | "solid" | "hachure" | "cross-hatch" | "zigzag" | "zigzag-line">;
        default: "hachure";
    };
    fillWeight: NumberConstructor;
    roughness: {
        type: NumberConstructor;
        default: number;
    };
    bowing: {
        type: NumberConstructor;
        default: number;
    };
    simplification: {
        type: NumberConstructor;
        default: number;
    };
    interactive: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: NumberConstructor;
    height: NumberConstructor;
    margin: {
        type: PropType<{
            top: number;
            right: number;
            bottom: number;
            left: number;
        }>;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
};
export declare const lineChartOptions: {
    chartData: {
        type: StringConstructor;
        required: true;
    };
    y: StringConstructor;
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
    circleRadius: {
        type: NumberConstructor;
        default: number;
    };
    circleRoughness: {
        type: NumberConstructor;
        default: number;
    };
    legend: {
        type: BooleanConstructor;
        default: boolean;
    };
    legendPosition: {
        type: PropType<"left" | "right">;
        default: string;
    };
    colors: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string[];
    };
    labelFontSize: {
        type: StringConstructor;
        default: string;
    };
    stroke: {
        type: StringConstructor;
        default: string;
    };
    axisFontSize: {
        type: StringConstructor;
        default: string;
    };
    axisRoughness: {
        type: NumberConstructor;
        default: number;
    };
    axisStrokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    xLabel: StringConstructor;
    yLabel: StringConstructor;
    title: StringConstructor;
    titleFontSize: {
        type: StringConstructor;
        default: string;
    };
    tooltipFontSize: {
        type: StringConstructor;
        default: string;
    };
    font: {
        type: PropType<0 | 1 | "gaegu" | "indie flower">;
        default: string;
    };
    fillStyle: {
        type: PropType<"dashed" | "solid" | "hachure" | "cross-hatch" | "zigzag" | "zigzag-line">;
        default: "hachure";
    };
    fillWeight: NumberConstructor;
    roughness: {
        type: NumberConstructor;
        default: number;
    };
    bowing: {
        type: NumberConstructor;
        default: number;
    };
    simplification: {
        type: NumberConstructor;
        default: number;
    };
    interactive: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: NumberConstructor;
    height: NumberConstructor;
    margin: {
        type: PropType<{
            top: number;
            right: number;
            bottom: number;
            left: number;
        }>;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
};
export declare const scatterChartOptions: {
    x: StringConstructor;
    y: StringConstructor;
    colorVar: StringConstructor;
    curbZero: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlight: {
        type: StringConstructor;
        default: string;
    };
    highlightLabel: StringConstructor;
    innerStrokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    radius: {
        type: (NumberConstructor | ArrayConstructor)[];
    };
    colors: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string[];
    };
    labelFontSize: {
        type: StringConstructor;
        default: string;
    };
    stroke: {
        type: StringConstructor;
        default: string;
    };
    axisFontSize: {
        type: StringConstructor;
        default: string;
    };
    axisRoughness: {
        type: NumberConstructor;
        default: number;
    };
    axisStrokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    xLabel: StringConstructor;
    yLabel: StringConstructor;
    chartData: {
        type: PropType<string | Record<string, (string | number)[]>>;
        required: boolean;
    };
    title: StringConstructor;
    titleFontSize: {
        type: StringConstructor;
        default: string;
    };
    tooltipFontSize: {
        type: StringConstructor;
        default: string;
    };
    font: {
        type: PropType<0 | 1 | "gaegu" | "indie flower">;
        default: string;
    };
    fillStyle: {
        type: PropType<"dashed" | "solid" | "hachure" | "cross-hatch" | "zigzag" | "zigzag-line">;
        default: "hachure";
    };
    fillWeight: NumberConstructor;
    roughness: {
        type: NumberConstructor;
        default: number;
    };
    bowing: {
        type: NumberConstructor;
        default: number;
    };
    simplification: {
        type: NumberConstructor;
        default: number;
    };
    interactive: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: NumberConstructor;
    height: NumberConstructor;
    margin: {
        type: PropType<{
            top: number;
            right: number;
            bottom: number;
            left: number;
        }>;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
};
