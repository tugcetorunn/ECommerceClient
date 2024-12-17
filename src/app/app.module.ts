import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // child lar oluşturulduktan sonra nihai rotaları belirlediğiniz module
    AdminModule, // customerCompenent export süreci-4
    UiModule, 
    BrowserAnimationsModule, // alertify ve toastr için required module
    ToastrModule.forRoot() // toastrModule added
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
