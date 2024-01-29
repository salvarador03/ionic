import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FiltroBusquedaComponent } from './components/filtro-busqueda/filtro-busqueda.component';
import { SelectComponent } from './components/select/select.component';


@NgModule({
  declarations: [

  ],  
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    FiltroBusquedaComponent,
    SelectComponent
  ]
})
export class SharedModule { }
export { MenuComponent };

