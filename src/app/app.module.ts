import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProdsComponent } from './pages/prods/prods.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { CreateProductObjectComponent } from './components/create-product/create-product-object/create-product-object.component';
import { CreateProductFormComponent } from './components/create-product/create-product-form/create-product-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdsComponent,
    GestionComponent,
    FooterComponent,
    HeaderComponent,
    CreateProductComponent,
    CreateProductObjectComponent,
    CreateProductFormComponent
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
