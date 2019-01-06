import { Component, OnInit } from '@angular/core';
import { ChartDataService } from './../../services/chart-data.service';
import { LineChartService } from './../../global/charts/line-chart.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  public lineChartData: any;

  constructor(private chartDataService: ChartDataService, private lineChartService: LineChartService) { }

  ngOnInit() {
    this.chartDataService.getLineChartData().pipe(tap(data => this.lineChartData = data))
      .subscribe(_ => this.lineChartService.renderChart('lineChartContainer', this.lineChartData));
  }
}
