import * as amcharts5Hierarchy from "@amcharts/amcharts5/hierarchy";
import AbstractChartBuilder from './abstract-chart.builder';

export default class ChartPackedCircleBuilder extends AbstractChartBuilder {

  private _series: amcharts5Hierarchy.Pack;

  constructor(containerId: string) {
    super(containerId);

    this._series = this._root.container.children.push(
      amcharts5Hierarchy.Pack.new(
        this._root,
        {
          singleBranchOnly: false,
          downDepth: 1,
          initialDepth: 10,
          valueField: 'value',
          categoryField: 'name',
          childDataField: 'children'
        }
      )
    );
  }

  build(): any {
    this._series.data.setAll(this._data);
    this._series.set('selectedDataItem', this._series.dataItems[0]);
    this._series.appear(1000, 100);
  }

}
