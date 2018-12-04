import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ECharts, EChartOption } from 'echarts';
import * as echarts from 'echarts/src/echarts';
import 'echarts/src/chart/line';

import { LineSeries } from './line-series';


@Component({
  selector: 'ne-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @ViewChild('chart') chart;

  @Input('series') series: LineSeries;

  constructor() { }

  ngOnInit() {
    const line: ECharts = echarts.init(this.chart.nativeElement);
    const option: EChartOption = {
      title: {
          text: 'ECharts entry example'
      },
      tooltip: {},
      legend: {
          data: ['Sales']
      },
      xAxis: {
          data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks']
      },
      yAxis: {},
      series: [{
          name: this.series.name,
          type: 'line',
          data: this.series.data
      }]
    };
    // use configuration item and data specified to show chart
    line.setOption(option);
  }

}
