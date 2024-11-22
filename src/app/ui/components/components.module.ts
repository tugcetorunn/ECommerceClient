import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketsModule } from './baskets/baskets.module';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';


// ui yani sitemizin kullanıcıya görünen kısmında ne varsa component olarak onlar olacak. products, basket...
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasketsModule,
    ProductsModule,
    HomeModule
  ]
})
export class ComponentsModule { }
