import * as amcharts5 from '@amcharts/amcharts5';
import * as amcharts5Venn from '@amcharts/amcharts5/venn';
import AbstractChartBuilder from './abstract-chart.builder';

export default class ChartVennBuilder extends AbstractChartBuilder {

  private _series: amcharts5Venn.Venn;

  constructor(containerId: string) {
    super(containerId);

    this._series = this._root.container.children.push(
      amcharts5Venn.Venn.new(
        this._root,
        {
          categoryField: 'name',
          valueField: 'value',
          intersectionsField: 'sets',
          paddingTop: 40,
          paddingBottom: 40,
          paddingLeft: 40,
          paddingRight: 40
        }
      )
    );
  }

  build(): any {
    this._series.data.setAll(this._data);

    this._series.slices.template.set('tooltipText', "{category}: {value}");
    this._series.hoverGraphics.setAll({
      strokeDasharray: [3, 3],
      stroke: amcharts5.color(0xffffff),
      strokeWidth: 2
    });
    
    return this._root;
  }

}
