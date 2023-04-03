import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdsComponent } from './pages/prods/prods.component';
import { GestionComponent } from './pages/gestion/gestion.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "products", component: ProdsComponent
  },
  {
    path: "gestion", component: GestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
