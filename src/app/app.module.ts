import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // child lar oluşturulduktan sonra nihai rotaları belirlediğiniz module
    AdminModule, // customerCompenent export süreci-4
    UiModule, 
    BrowserAnimationsModule, // alertify ve toastr için required module (ve spinner)
    ToastrModule.forRoot(), // toastrModule added
    NgxSpinnerModule // spinner taglarını hangi componentte kullanacaksak o componentin düzeyindeki module e bu module 
    // ü import etmemiz gerekiyor. adminde de uida da kullanmak istediğimiz için appModule e import ediyoruz. spinner 
    // tagları bu module ile kullanılabilir hale geliyor. spinner kullanacağımız yerde bu module ü import etmemiz gerekiyor. 
    // örn. admin dashboard da kullanacağız sadece buraya import etmemiz yetmiyor. dashboardComponenti içine alan module 
    // de ngxSpinnerModule import edilmesi lazım ki taglar kullanılabilsin.
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
