import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductsComponent } from './Components/products/products.component';
import { ContactComponent } from './Components/contact/contact.component';


const routes: Routes = [{
  path: 'Home/:lang', 
  component: HomeComponent
  }, {
  path: 'About/:lang',
  component: AboutComponent
  }, {
  path: 'Products/:lang', 
  component: ProductsComponent
  }, {
  path: 'Contact/:lang', 
  component: ContactComponent
  }, { 
  path: '', 
  redirectTo: 'Home/en',
  pathMatch: 'full' 
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
