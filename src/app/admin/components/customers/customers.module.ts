import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';



@NgModule({
  declarations: [
    CustomersComponent // componentler kullanılabilmek için ana module e (appModule) declare edilmesi gerekiyor. 
    // angular cli da hiyerarşik yapılarda bunu bildiği için componentleri en yakın dizindeki module e otomatik declare
    // eder.
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomersComponent // customerCompenent export süreci-1
  ]
})
export class CustomersModule { }
