import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { SwiperModule } from 'swiper/angular';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule} from '@angular/material/icon'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { HttpClientModule } from '@angular/common/http';

import { PortadaComponent } from './pages/portada/portada.component';
import { NavbarBottomComponent } from './shared/navbar-bottom/navbar-bottom.component';
import { SwiperComponent } from './slideshow/swiper/swiper.component';
import { SwipperMacetasComponent } from './slideshow/swipper-macetas/swipper-macetas.component';
import { SwipperSustratosComponent } from './slideshow/swipper-sustratos/swipper-sustratos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionComponent } from './pages/gestion/gestion.component';

// Servicios API
import { UsuariosAPIService } from './services/usuariosAPI/usuarios-api.service';
import { AerticulosAPIService } from './services/articulosAPI/aerticulos-api.service';
import { PedidosAPIService } from './services/pedidosAPI/pedidos-api.service';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { ModalCrearUsuarioComponent } from './shared/modales/modal-crear-usuario/modal-crear-usuario.component';
import { ModalEditarUsuarioComponent } from './shared/modales/modal-editar-usuario/modal-editar-usuario.component';
import { ModalCrearArticuloComponent } from './shared/modales/modal-crear-articulo/modal-crear-articulo.component';
import { ModalEditarArticuloComponent } from './shared/modales/modal-editar-articulo/modal-editar-articulo.component';
import { ModalCrearPedidoComponent } from './shared/modales/modal-crear-pedido/modal-crear-pedido.component';
import { ModalEditarPedidoComponent } from './shared/modales/modal-editar-pedido/modal-editar-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PortadaComponent,
    RegistroComponent,
    LoginComponent,
    UsuariosComponent,
    ArticulosComponent,
    PedidosComponent,
    NavbarBottomComponent,
    SwiperComponent,
    SwipperMacetasComponent,
    SwipperSustratosComponent,
    GestionComponent,
    ContrasenaPipe,
    ModalCrearUsuarioComponent,
    ModalEditarUsuarioComponent,
    ModalCrearArticuloComponent,
    ModalEditarArticuloComponent,
    ModalCrearPedidoComponent,
    ModalEditarPedidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [UsuariosAPIService, AerticulosAPIService, PedidosAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
