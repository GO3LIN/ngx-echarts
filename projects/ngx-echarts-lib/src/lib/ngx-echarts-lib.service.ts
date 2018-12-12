import { Injectable } from '@angular/core';
import { Observable, from, pipe } from 'rxjs';
import { concat } from 'rxjs/operators';
import { EChartOption, EChartsSeriesType } from 'echarts';

@Injectable({
  providedIn: 'root'
})
export class NgxEchartsLibService {

  componentsToImport = [
    'grid', 'polar', 'geo', 'singleAxis', 'parallel', 'calendar', 'graphic', 'toolbox',
    'tooltip', 'axisPointer', 'brush', 'title', 'timeline', 'dataZoom', 'visualMap',
    'legend', 'dataZoom', 'dataZoomInside', 'dataZoomSlider', 'visualMap'
  ];
  typeComponents = ['dataZoom', 'visualMap', 'legend'];
  seriesComponents = ['markPoint', 'markLine', 'markArea'];
  tooltipComponents = ['brush', 'axisPointer'];



  constructor() { }

  init(option: EChartOption, renderer: string) {
    if (renderer === 'svg') {
      import('zrender/src/svg/svg');
    }
    return this.lazyLoadSeriesTypes(option.series).pipe(
        concat(this.lazyLoadComponents(option))
      );
  }

  lazyLoadSeriesTypes(series) {
    // We first get unique series types
    const types = Array.from(new Set(series.map(s => <EChartsSeriesType> s.type)));
    const promises = [];
    for (let i = 0; i < types.length; i++) {
      promises.push(import(`echarts/src/chart/${types[i]}`));
    }
    return from(Promise.all(promises));
  }

  lazyLoadComponents(option: EChartOption) {
    // Import the obvious things first.
    const promises = this.importFirstLevelComponents(option);
    promises.push(this.importTypeComponents(option));
    if (option.hasOwnProperty('series')) {
      promises.push(this.importSeriesComponents(option['series']));
    }
    if (option.hasOwnProperty('tooltip')) {
      promises.push(this.importTooltipComponents(option['tooltip']));
    }

    return from(Promise.all(promises));
  }

  importFirstLevelComponents(option: EChartOption) {
    const promises = [];
    for (let i = 0; i < this.componentsToImport.length; i++) {
      if (option.hasOwnProperty(this.componentsToImport[i])) {
        promises.push(import(`echarts/src/component/${this.componentsToImport[i]}`));
      }
    }

    return promises;
  }

  importTypeComponents(option: EChartOption)  {
    const promises = [];
    for (const type in this.typeComponents) {
      if (option.hasOwnProperty(type) && option[type].hasOwnProperty('type')) {
        const typeCmp = option[type]['type'];
        const componentName = `visualMap${typeCmp.charAt(0).toUpperCase()}${typeCmp.slice(1)}`;
        promises.push(import(`echarts/src/component/${componentName}`));
      }
    }

    return promises;
  }

  importSeriesComponents(series) {
    const promises = [];
    for (let i = 0; i < series.length ; i++) {
      for (const sCmp in this.seriesComponents) {
        if (series[i].hasOwnProperty(sCmp)) {
          promises.push(import(`echarts/src/component/${sCmp}`));
        }
      }
    }

    return promises;
  }

  importTooltipComponents(tooltip) {
    const promises = [];
    if (tooltip.hasOwnProperty('axisPointer')) {
      promises.push(import('echarts/src/component/axisPointer'));
    }
    if (tooltip.hasOwnProperty('feature') && tooltip['feature'].hasOwnProperty('brush')) {
      promises.push(import('echarts/src/component/brush'));
    }
    return promises;
  }

}
