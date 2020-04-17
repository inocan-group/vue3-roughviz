declare module 'rough-viz' {
  import { IChartConfig, IBarChart, IPieChart, ILineChart, IScatterChart, IStackedBarChart } from '@/@types'
  export class Bar {
    constructor(config: IChartConfig<IBarChart>)
  }
  export class BarH {
    constructor(config: IChartConfig<IBarChart>)
  }
  export class Donut {
    constructor(config: IChartConfig<IPieChart>)
  }
  export class Line {
    constructor(config: IChartConfig<ILineChart>)
  }
  export class Pie {
    constructor(config: IChartConfig<IPieChart>)
  }
  export class Scatter {
    constructor(config: IChartConfig<IScatterChart>)
  }
  export class StackedBar {
    constructor(config: IChartConfig<IStackedBarChart>)
  }
}
