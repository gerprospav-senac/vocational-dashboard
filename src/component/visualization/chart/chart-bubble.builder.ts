import * as amcharts5 from '@amcharts/amcharts5';
import * as amcharts5XY from "@amcharts/amcharts5/xy";
import AbstractChartBuilder from './abstract-chart.builder';

export default class ChartBubbleBuilder extends AbstractChartBuilder {

  private _chart: amcharts5XY.XYChart;

  constructor(containerId: string) {
    super(containerId);
    
    this._chart = this._root.container.children.push(
      amcharts5XY.XYChart.new(
        this._root,
        {
          panX: true,
          panY: true,
          wheelY: 'zoomXY',
          pinchZoomX:true,
          pinchZoomY:true
        }
      )
    );
  }

  build(): any {
    const xAxis = this._chart.xAxes.push(
      amcharts5XY.ValueAxis.new(
        this._root,
        {
          renderer: amcharts5XY.AxisRendererX.new(this._root, {}),
          tooltip: amcharts5.Tooltip.new(this._root, {})
        }
      )
    );

    xAxis.children.moveValue(
      amcharts5.Label.new(
        this._root,
        {
          text: 'Títulos',
          x: amcharts5.p50,
          centerX: amcharts5.p50
        }
      ),
      xAxis.children.length - 1
    );

    const yAxis = this._chart.yAxes.push(
      amcharts5XY.ValueAxis.new(
        this._root,
        {
          renderer: amcharts5XY.AxisRendererY.new(this._root, { inversed: false }),
          tooltip: amcharts5.Tooltip.new(this._root, {})
        }
      )
    );

    yAxis.children.moveValue(
      amcharts5.Label.new(
        this._root,
        {
          rotation: -90,
          text: 'Matrículas totais',
          y: amcharts5.p50,
          centerX: amcharts5.p50
        }
      ),
      0
    );

    const series = this._chart.series.push(
      amcharts5XY.LineSeries.new(
        this._root,
        {
          calculateAggregates: true,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: 'y',
          valueXField: 'x',
          valueField: 'value',
          seriesTooltipTarget: 'bullet',
          tooltip: amcharts5.Tooltip.new(
            this._root,
            {
              pointerOrientation: 'horizontal',
              labelText: "[bold]{title}[/]\nMatrículas totais: {y.formatNumber('#,###.')}\nTítulos: {x.formatNumber('#,###.')}"
            }
          )
        }
      )
    );

    series.strokes.template.set('visible', false);

    const template : amcharts5.Template<amcharts5.Circle> = amcharts5.Template.new({});
    series.bullets.push((root) => {
      return amcharts5.Bullet.new(
        root,
        {
          sprite: amcharts5.Circle.new(
            root,
            {
              radius: 5,
              fillOpacity: 0.8,
              templateField: 'settings',
            },
            template
          )
        }
      );
    });

    series.set('heatRules', [{ target: template, min: 3, max: 60, dataField: 'value', key: 'radius' }]);
    series.data.setAll(this._data);

    this._chart.set(
      'cursor',
      amcharts5XY.XYCursor.new(
        this._root,
        {
          xAxis: xAxis,
          yAxis: yAxis,
          snapToSeries: [series]
        }
      )
    );

    this._chart.set('scrollbarX', amcharts5.Scrollbar.new(this._root, { orientation: 'horizontal' }));
    this._chart.set('scrollbarY', amcharts5.Scrollbar.new(this._root, { orientation: 'vertical' }));

    series.appear(1000);
    this._chart.appear(1000, 100);

    return this._root;
  }

}
