import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { AdminsGuard } from './guards/admins.guard';

const routes: Routes = [
  {path: 'home',        component: HomeComponent},
  {path: 'registro',    component: RegistroComponent},
  {path: 'login',       component: LoginComponent},
  {path: 'usuarios',    component: UsuariosComponent},
  {path: 'articulos',   component: ArticulosComponent},
  {path: 'pedidos',     component: PedidosComponent},
  {path: 'gestion',     component: GestionComponent, canActivate: [ AdminsGuard ]},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
