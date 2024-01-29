import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// TODO : CORREGIR LO COMENTADO

//import * as CanvasJSAngularChart from '../../lib/canvasjs.angular.component';
import { EstadisticasNombreComponent } from './components/estadisticas-nombre/estadisticas-nombre.component';
import { CarteleraPeliculasComponent } from './components/cartelera-peliculas/cartelera-peliculas.component';
//var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    //CanvasJSChart,
    DashboardComponent,
    EstadisticasNombreComponent,
    CarteleraPeliculasComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class DashboardModule { }
