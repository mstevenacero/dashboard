import { Component, OnInit } from '@angular/core';

import{DatosService} from '../../service/datos.service'



@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.css']
})
export class PantallaComponent  implements OnInit{
  Data:any[]=[]

  constructor(private Datausers:DatosService){}

  ngOnInit(): void {

    this.Data=this.Datausers.Data()
    
    
  }
  
}
