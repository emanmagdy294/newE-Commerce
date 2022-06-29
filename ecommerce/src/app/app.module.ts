import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CartsModule } from './carts/carts.module';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutComponent } from './components/about/about.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    CartsModule,
    FormsModule,
    NgImageSliderModule,
    NgxUsefulSwiperModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
