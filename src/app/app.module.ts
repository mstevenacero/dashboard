import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaComponent } from './componentes/pantalla/pantalla.component';

import { ChartsModule } from 'ng2-charts';
import { GraficoBarrasComponent } from '../../src/app/componentes/grafico-barras/grafico-barras.component';
import { GraficoTortaComponent } from './componentes/grafico-torta/grafico-torta.component';
import { RadarComponent } from './radar/radar.component';
import { TablaComponent } from './tabla/tabla.component';


@NgModule({
  declarations: [
    AppComponent,
    PantallaComponent,
    
    GraficoBarrasComponent,
    GraficoTortaComponent,
    RadarComponent,
    TablaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
