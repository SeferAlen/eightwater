import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductsComponent } from './Components/products/products.component';
import { ContactComponent } from './Components/contact/contact.component';


const routes: Routes = [{
  path: 'Home', 
  component: HomeComponent
  }, {
  path: 'About',
  component: AboutComponent
  }, {
  path: 'Products', 
  component: ProductsComponent
  }, {
  path: 'Contact', 
  component: ContactComponent
  }, { 
  path: '**', 
  redirectTo: 'Home' 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
