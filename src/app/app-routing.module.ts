import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductsComponent } from './Components/products/products.component';
import { ContactComponent } from './Components/contact/contact.component';


const routes: Routes = [{
  path: 'Home', 
  component: HomeComponent,
  data: { animationState: 'One' }
  }, {
  path: 'About',
  component: AboutComponent,
  data: { animationState: 'Two' }
  }, {
  path: 'Products', 
  component: ProductsComponent,
  data: { animationState: 'Three' }
  }, {
  path: 'Contact', 
  component: ContactComponent,
  data: { animationState: 'Four' }
  }, { 
  path: '', 
  redirectTo: 'Home',
  pathMatch: 'full' 
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
