import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {
  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['vistas', 'tiempo en la pagina', 'entradad', 'salidas', 'rebote'];

  public radarChartData: ChartDataSets[] = [
    { data: [1500,452,1784,845,125], label: 'angular' },
    { data: [800,300,1203,624,133], label: 'react' }
  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }
  
  
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
