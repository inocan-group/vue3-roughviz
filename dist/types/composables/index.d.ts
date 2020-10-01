import { Ref } from 'vue';
import { IChartConfig, IChart } from "../@types/index";
interface IChartConstructor<T extends IChart> {
    new (config: IChartConfig<T>): any;
}
export declare const useSetupRoughVizChart: <T extends IChart>(Ctor: IChartConstructor<T>, opts: T) => Ref<HTMLElement | null>;
export {};
