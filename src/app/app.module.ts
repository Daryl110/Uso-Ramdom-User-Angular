import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos
import { AngularMaterialModule } from './angular-material/angular-material.module';

// Componentes
import { PostComponent } from './componentes/post/post.component';
import { PhotosComponent } from './componentes/photos/photos.component';
import { ResponsiveComponent } from './responsive/responsive.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PhotosComponent,
    ResponsiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
