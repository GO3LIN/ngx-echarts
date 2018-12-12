import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ECharts, EChartOption } from 'echarts';
import * as echarts from 'echarts/src/echarts';
import 'echarts/src/chart/line';

@Component({
  selector: 'ne-line-chart',
  template: `<div class="chart" #chart></div>`,
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @ViewChild('chart') chart;
  @Input('option') option: EChartOption;
  @Input('theme') theme: Object | string;
  @Input('devicePixelRatio') devicePixelRatio: number;
  @Input('renderer') renderer: string;
  @Output() ready = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    const optionKeys = Object.keys(this.option);
    if (optionKeys.includes('title')) {
      import('echarts/src/component/title').then(_ => {
        const line: ECharts = echarts.init(
          this.chart.nativeElement, this.theme, this.devicePixelRatio, this.renderer
        );
        line.setOption(this.option);
        this.ready.emit(line);
      });
    }
  }

}
