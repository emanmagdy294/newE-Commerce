import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
const routes: Routes = [
  {path:"",redirectTo:"products",pathMatch:"full"},
  {path:"products", component:AllProductsComponent},
  {path:"details/:id", component:ProductDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:"contact", component:ContactUsComponent},
  {path:"about", component:AboutComponent},
  {path:"**", redirectTo:"product" , pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
