import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';


// bir sayfanın ya da bölümün, componentin kendine ait componentleri varsa bunların yönetimini sağlamak adına 
// components adında module ekleyerek bu module altında componentleri oluşturmak faydalı olacaktır. burası da 
// adminLayout un kendi componentlerini barındıracağı module dür.
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // routerLink attribute ünün çalıştırılması için
    MatListModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
