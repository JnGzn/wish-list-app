import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { DeseosComponent } from './deseos/deseos.component';

const routes: Routes = [
  {path: 'home', component: ProductosComponent},
  {path: '', component: ProductosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'deseos', component: DeseosComponent},
  {path: '**', redirectTo: 'home'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
