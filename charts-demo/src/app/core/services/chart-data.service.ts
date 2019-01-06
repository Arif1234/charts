import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { lineChartData } from '../data/line-chart.data';
import { bubbleChartData } from '../data/bubble-chart.data';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private http: HttpClient) { }

  getLineChartData(): Observable<any> {
    return of(lineChartData);
  }

  getBubbleChartData(): Observable<any> {
    return of(bubbleChartData);
  }
}
