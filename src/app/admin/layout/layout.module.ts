import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';


// bu layoutModule admin in mvc deki view gibi şablon olarak kullanacağımız module dür. yönetim panelinin tasarımının 
// altyapısı olucak. view lerde kullandığımız renderBody, renderSection gibi burada da html kısmında router outlet 
// parametreleri kullanılacak.
@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule // router-outlet kullanabilmemiz için
  ],
  exports: [
    LayoutComponent, //? componentsModule u bırakıp layoutComponent i buradan kaldırınca da çalışıyor. ??
    ComponentsModule //? bunu export etmemize gerek yok ama buraya export edilmezse app.component.html de <app-header> 
    //? vs kullandığımızda otomatik app.module e componentsModule u import ediyor. aslında layout ve admin ile otomatik
    //? import sağlanmış olması gerek. ??
  ]
})
export class LayoutModule { }
