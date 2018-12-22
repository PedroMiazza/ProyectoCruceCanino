import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InformacionComponent } from './informacion/informacion.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio'},
	{ path: 'inicio', component: InicioComponent },
	{ path: 'informacion', component: InformacionComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'resultado', component: ListadoComponent },
  { path: 'listado/adoptar', component: ListadoComponent },
  { path: 'listado/cruzar', component: ListadoComponent },
  { path: 'resultado/:idusuario', component: ResultadoComponent },
  { path: '**', component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
