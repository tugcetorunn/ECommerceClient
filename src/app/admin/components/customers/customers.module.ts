import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomersComponent // componentler kullanılabilmek için ana module e (appModule) declare edilmesi gerekiyor. 
    // angular cli da hiyerarşik yapılarda bunu bildiği için componentleri en yakın dizindeki module e otomatik declare
    // eder.
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: CustomersComponent }, 
      // { path: "customerComp1", component: } bu module başka componentleri de içerseydi bu dizi böyle ilerlerdi.
    ])
    // admin ve ui altyapılarını oluşturduktan sonra moduler altyapıya geçişte ilk adım route ile yönlendirme 
    // yapacağımız componentlerin bulunduğu module lerde route belirliyoruz üst satırdaki gibi. şuan bu module de
    // sadece customerComponent olduğu için path de isim belirtmemiz şart değil yönlendirme direk tek comp. olduğu 
    // için customer a yapılacaktır. path i istek yapılırken kullanılacak isim olarak düşünebiliriz. admindeki 
    // customerComp. e erişebilmemiz için bu rotaya ihtiyacımız var. admin componentlerinin ve ui componentlerinin
    // tümünde bu route ları import ediyoruz. daha sonra bu rotaları ana module de birleştireceğiz.
    // ana root da oluşturulduktan sonra artık https://www.xsite.com/admin/customers adresinin geleceği yer burası.
    // eğer path e örn x deseydik https://www.xsite.com/admin/customers/x ile buraya ulaşmamız gerekirdi.
  ],
  exports: [
    CustomersComponent // customerCompenent export süreci-1
  ]
})
export class CustomersModule { }
