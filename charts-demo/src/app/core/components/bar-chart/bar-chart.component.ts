import { Component, OnInit } from '@angular/core';
import { BubbleChartService } from './../../global/charts/bubble-chart.service';
import { ChartDataService } from './../../services/chart-data.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public barChartData: any;

  constructor(private chartDataService: ChartDataService, private bubbleChartService: BubbleChartService) { }

  ngOnInit() {
    // this.chartDataService.getBubbleChartData().pipe(tap(data => this.barChartData = data))
      // .subscribe(_ => this.bubbleChartService.renderChart(this.barChartData));
  }

}
