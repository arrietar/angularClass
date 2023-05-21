import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListadoComponent } from './components/listado/listado.component';

import {DatosService} from "./services/datos.service";
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { AgregarPreguntaComponent } from './components/agregar-pregunta/agregar-pregunta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListadoComponent,
    PreguntaComponent,
    AgregarPreguntaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
