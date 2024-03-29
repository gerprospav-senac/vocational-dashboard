import * as amcharts5 from '@amcharts/amcharts5';
import * as amcharts5Hierarchy from "@amcharts/amcharts5/hierarchy";
import AbstractChartBuilder from './abstract-chart.builder';

export default class ChartTreeBuilder extends AbstractChartBuilder {

  private _container: amcharts5.ZoomableContainer;
  private _series: amcharts5Hierarchy.Tree;

  constructor(containerId: string) {
    super(containerId);

    this._container = this._root.container.children.push(
      amcharts5.ZoomableContainer.new(
        this._root,
        {
          width: amcharts5.p100,
          height: amcharts5.p100,
          wheelable: true,
          pinchZoom: true
        }
      )
    );
    
    this._container.children.push(amcharts5.ZoomTools.new(this._root, { target: this._container }));

    this._series = this._container.contents.children.push(
      amcharts5Hierarchy.Tree.new(
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
    this._series.labels.template.set('minScale', 0);
    this._series.data.setAll(this._data);
    this._series.set('selectedDataItem', this._series.dataItems[0]);
    this._series.appear(1000, 100);
  }

}
