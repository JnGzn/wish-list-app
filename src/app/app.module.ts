import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';
import { DeseosComponent } from './deseos/deseos.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { NoImagePipe } from './pipes/no-image.pipe';
import { FormsModule } from '@angular/forms';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    DeseosComponent,
    CardComponent,
    NoImagePipe,
    DomSeguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
