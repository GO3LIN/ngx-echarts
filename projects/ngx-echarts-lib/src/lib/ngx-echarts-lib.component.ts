import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ECharts, EChartOption, EChartsSeriesType } from 'echarts';
import * as echarts from 'echarts/src/echarts';
import 'echarts/src/chart/line';

import { NgxEchartsLibService } from './ngx-echarts-lib.service';

@Component({
  selector: 'ne-chart',
  template: `<div class="chart" #chart></div>`,
  styleUrls: ['./ngx-echarts-lib.component.scss']
})
export class NgxEchartsLibComponent implements OnInit {

  @ViewChild('chart') chart;
  @Input('option') option: EChartOption;
  @Input('theme') theme: Object | string;
  @Input('devicePixelRatio') devicePixelRatio: number;
  @Input('renderer') renderer: string;
  @Output() ready = new EventEmitter<any>();

  constructor(private echartsService: NgxEchartsLibService) { }

  ngOnInit() {
    this.echartsService.init(this.option, this.renderer).subscribe( _ => {
      const line: ECharts = echarts.init(
        this.chart.nativeElement, this.theme,
        { devicePixelRatio: this.devicePixelRatio, renderer: this.renderer }
      );
      line.setOption(this.option);
      this.ready.emit(line);
    });
  }
}
