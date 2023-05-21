import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListadoComponent } from './components/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
