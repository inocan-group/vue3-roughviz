/**
 * This file includes the ExtractPropTypes utility from Vue. It can be used to extract TypeScript types
 * from Vue props options objects.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
type Prop<T, Required extends boolean> = PropOptions<T, Required> | PropType<T>;

interface PropOptions<T = any, Required extends boolean = false> {
  type?: PropType<T> | null;
  required?: Required;
  default?: T | null | undefined | (() => T | null | undefined);
  validator?(value: any): boolean;
}

type PropType<T> = PropConstructor<T> | PropConstructor<T>[];

type PropConstructor<T> = { new (...args: any[]): T & object } | { (): T } | { new (...args: string[]): Function };

type RequiredKeys<T, MakeDefaultRequired> = {
  [K in keyof T]: T[K] extends { required: true } | (MakeDefaultRequired extends true ? { default: any } : never)
    ? K
    : never;
}[keyof T];

type OptionalKeys<T, MakeDefaultRequired> = Exclude<keyof T, RequiredKeys<T, MakeDefaultRequired>>;

type InferPropType<T> = T extends null
  ? any // null & true would fail to infer
  : T extends { type: null }
  ? any // somehow `ObjectConstructor` when inferred from { (): T } becomes `any`
  : T extends ObjectConstructor | { type: ObjectConstructor }
  ? { [key: string]: any }
  : T extends Prop<infer V, true | false>
  ? V
  : T;

export type ExtractPropTypes<O, MakeDefaultRequired extends boolean = true> = {
  [K in RequiredKeys<O, MakeDefaultRequired>]: InferPropType<O[K]>;
} &
  {
    [K in OptionalKeys<O, MakeDefaultRequired>]?: InferPropType<O[K]>;
  };
