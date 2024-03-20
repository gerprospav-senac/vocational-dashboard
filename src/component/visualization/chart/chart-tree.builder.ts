import * as amcharts5Hierarchy from "@amcharts/amcharts5/hierarchy";
import AbstractChartBuilder from './abstract-chart.builder';

export default class ChartTreeBuilder extends AbstractChartBuilder {

  private _series: amcharts5Hierarchy.ForceDirected;

  constructor(containerId: string) {
    super(containerId);
    
    this._series = this._root.container.children.push(
      amcharts5Hierarchy.ForceDirected.new(
        this._root,
        {
          singleBranchOnly: false,
          downDepth: 1,
          initialDepth: 2,
          categoryField: 'name',
          valueField: 'value',
          childDataField: 'children',
          centerStrength: 0.5
        }
      )
    );
  }

  build(): any {
    this._series.data.setAll(this._data);
    this._series.set('selectedDataItem', this._series.dataItems[0]);
    this._series.appear(1000, 100);
    
    return this._root;
  }

}
