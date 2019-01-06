import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarChartComponent } from './../components/bar-chart/bar-chart.component';
import { LineChartComponent } from './../components/line-chart/line-chart.component';

@NgModule({
    declarations: [
        LineChartComponent,
        BarChartComponent
    ],
    imports: [
      CommonModule
    ],
    exports: [
        LineChartComponent,
        BarChartComponent
    ]
  })
  export class SharedModule { }
