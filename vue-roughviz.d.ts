import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const VueRoughviz: { install: InstallFunction };
export default VueRoughviz;

export const VueRoughvizSample: VueConstructor<Vue>;
