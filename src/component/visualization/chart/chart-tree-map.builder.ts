import * as amcharts5Hierarchy from "@amcharts/amcharts5/hierarchy";
import AbstractChartBuilder from './abstract-chart.builder';

export default class ChartTreeMapBuilder extends AbstractChartBuilder {

  private _series: amcharts5Hierarchy.Treemap;

  constructor(containerId: string) {
    super(containerId);
    
    this._series = this._root.container.children.push(
      amcharts5Hierarchy.Treemap.new(
        this._root,
        {
          singleBranchOnly: false,
          downDepth: 1,
          upDepth: -1,
          initialDepth: 2,
          categoryField: 'name',
          valueField: 'value',
          childDataField: 'children',
          nodePaddingOuter: 0,
          nodePaddingInner: 0
        }
      )
    );
  }

  build(): any {
    this._series.rectangles.template.setAll({
      strokeWidth: 2
    });

    this._series.data.setAll(this._data);
    this._series.set('selectedDataItem', this._series.dataItems[0]);
    this._series.appear(1000, 100);

    return this._root;
  }

}
