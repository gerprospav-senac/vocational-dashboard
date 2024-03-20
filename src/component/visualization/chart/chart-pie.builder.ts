import * as amcharts5 from '@amcharts/amcharts5';
import * as amcharts5Percent from '@amcharts/amcharts5/percent';
import AbstractChartBuilder from './abstract-chart.builder';

export default class ChartPieBuilder extends AbstractChartBuilder {

  private _chart: amcharts5Percent.PieChart;
  private _series: amcharts5Percent.PieSeries;

  constructor(containerId: string) {
    super(containerId);
    
    this._chart = this._root.container.children.push(
      amcharts5Percent.PieChart.new(
        this._root,
        {
          startAngle: 180,
          endAngle: 360,
          layout: this._root.verticalLayout,
          paddingLeft: 160,
          paddingRight: 160,
          innerRadius: amcharts5.percent(50)
        }
      )
    );

    this._series = this._chart.series.push(
      amcharts5Percent.PieSeries.new(
        this._root,
        {
          startAngle: 180,
          endAngle: 360,
          categoryField: 'category',
          valueField: 'value',
          alignLabels: false
        }
      )
    );
  }

  build(): any {
    this._series.labels.template.setAll({
      fontSize: '0.8rem',
      fontWeight: 'bold',
      text: "{category}: {valuePercentTotal.formatNumber('#.00')}% ({value})"
    });
    this._series.slices.template.setAll({
      cornerRadius: 10,
      tooltipText: "{category}: {valuePercentTotal.formatNumber('#.00')}% ({value})"
    });
    this._series.states.create(
      'hidden',
      {
        startAngle: 180,
        endAngle: 180
      }
    );
    this._series.ticks.template.setAll({ forceHidden: true });

    const colorset = this._series.get('colors');
    if (colorset) {
      colorset.set('step', 2);
    }

    this._series.data.setAll(this._data);
    this._series.appear(1000, 100);
    
    return this._root;
  }

}
