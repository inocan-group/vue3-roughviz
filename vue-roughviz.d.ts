import Vue, { PluginFunction, VueConstructor } from 'vue'

interface InstallFunction extends PluginFunction<any> {
  installed?: boolean
}

declare const VueRoughviz: { install: InstallFunction }
export default VueRoughviz

export const BarChart: VueConstructor<Vue>
export const DonutChart: VueConstructor<Vue>
export const HorizontalBarChart: VueConstructor<Vue>
export const LineChart: VueConstructor<Vue>
export const PieChart: VueConstructor<Vue>
export const ScatterChart: VueConstructor<Vue>
export const StackedBarChart: VueConstructor<Vue>
