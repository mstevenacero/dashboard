import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  Data1: any[] = [

    {
      nombre: 'sesiones',
      numero: '1382',
      porcentaje: '78.52%',
   
    },
    {
      nombre: 'usuarios unicos',
      numero: '1364',
      porcentaje: '98.70%',
   
    },
    {
      nombre: '% de rebote',
      numero: '77.83%',
      porcentaje: '77.22',
   
    },
    {
      nombre: 'paginas por sesion',
      numero: '1,53',
      porcentaje: '0.26%',
   
    },
    {
      nombre: 'tiempo m,edio por sesion',
      numero: '1:06 min',
      porcentaje: '%',
   
    },
    {
      nombre: '% sesion de nuevas',
      numero: '33',
      porcentaje: '1.93%',
   
    },
    {
      nombre: '# visitas directas',
      numero: '207',
      porcentaje: '79.31%',
   
    },
    {
      nombre: '# visitas organicas',
      numero: '1387',
      porcentaje: '77.83',
   
    },
    {
      nombre: '# visitas sociales',
      numero: '66',
      porcentaje: '75%',
   
    },
    {
      nombre: '# visitas email',
      numero: '177',
      porcentaje: '76.66',

   
    },
    {
      nombre: '# visitas referenciales',
      numero: '39',
      porcentaje: '66.77%',
   
    },
    
  ]
  constructor() { }

  Data() {

    return this.Data1;
  }
}
