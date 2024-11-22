import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';


// ui kısmında layout dediğimiz altyapıyı oluşturmuyoruz. burada oluşturacağımız component html i zaten direk  
// uygulamamız olacak. yani uygulamanın default layout u zaten ui katmanı olacak.
// order genelde profile girdiğimizde gördüğümüz bir olay. direk anasayfada görmeyiz. o yüzden bunu eklemiyoruz. 
// customer da kullanıcının göreceği bir şey değil. admin tarafında olur.
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class UiModule { }
