import * as amcharts5 from '@amcharts/amcharts5';
import * as amcharts5Hierarchy from "@amcharts/amcharts5/hierarchy";
import AbstractChartBuilder from './abstract-chart.builder';

export default class ChartForceDirectedTreeBuilder extends AbstractChartBuilder {

  private _container: amcharts5.ZoomableContainer;
  private _series: amcharts5Hierarchy.ForceDirected;

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
      amcharts5Hierarchy.ForceDirected.new(
        this._root,
        {
          maskContent: false,
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