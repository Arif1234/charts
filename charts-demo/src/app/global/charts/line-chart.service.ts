import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class LineChartService {
  chartObject: Highcharts.Chart;

  chartOptions: any = {};

  constructor() { }

  renderChart(containerId: string, data: any) {
    this.chartOptions.series = data;
    return Highcharts.chart(containerId, this.chartOptions);
  }
}
