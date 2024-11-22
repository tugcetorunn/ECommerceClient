import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';


// product vs için önce module oluşturduk çünkü admindeki product da olsa birden çok component barındırabilir. 
// örn dashboarda ürün listesi getirme, stoğu azalan ürünleri getirme, bir product ile ilgili mesaj, yorum gelmiştir 
// canlı bir şekilde signalR ile o mesajı gösteren bir bölüm olabilir.
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    CustomersModule,
    ProductsModule,
    OrdersModule
  ],
  exports: [
    // customerCompenent export süreci-2
    CustomersModule, // angularda farklı module lerde declare edilmiş componentleri kendi aralarında selectorla 
    // referans edebilmek için bunların export edilmesi gerekiyor. başka dizinde kullanılacak component öncelikle
    // kendi declare edildiği module de export ediliyor. daha sonra projenin module components tasarım yapısına göre
    // export süreci appModule e en yakın module e kadar gidiyor. böylece zincirleme bir şekilde bağlantı sağlanıyor.
    ProductsModule,
    OrdersModule,
    DashboardModule
  ]
})
export class ComponentsModule { }
