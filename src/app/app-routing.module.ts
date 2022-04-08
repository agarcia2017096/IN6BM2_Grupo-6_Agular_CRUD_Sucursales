import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { InformacionSucursalesComponent } from './components/informacion-sucursales/informacion-sucursales.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosEmpresasComponent } from './components/productos-empresas/productos-empresas.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'  },
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'empresas', component: EmpresasComponent},
  {path: 'dash-board', component: DashBoardComponent},
  {path: 'informacion-sucursales', component: InformacionSucursalesComponent},
  {path: 'productos-empresas', component: ProductosEmpresasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
