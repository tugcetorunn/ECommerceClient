import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';


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
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
