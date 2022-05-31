import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { OwlCarsoulComponent } from './components/owl-carsoul/owl-carsoul.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FooterComponent,
    OwlCarsoulComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgImageSliderModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FooterComponent,
    OwlCarsoulComponent
  ]
})
export class SharedModule { }
