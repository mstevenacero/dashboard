import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';


@Component({
  selector: 'app-grafico-torta',
  templateUrl: './grafico-torta.component.html',
  styleUrls: ['./grafico-torta.component.css']
})
export class GraficoTortaComponent implements OnInit {
  public polarAreaChartLabels: Label[] = ['Angular', 'React', 'Laravel'];
  public polarAreaChartData: SingleDataSet = [1200, 800,750];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

   

 

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
