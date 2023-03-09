import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverComponent } from './components/driver/driver.component';

//componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEditDriverComponent } from './components/add-edit-driver/add-edit-driver.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import {CommonModule} from "@angular/common";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    AddEditDriverComponent,
    DriverComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
