import { Component, OnInit } from '@angular/core';
// alertify eklentisini denemek için önce kütüphane ile içinde metodların bulunduğu alertify değişkenini tanımlayalım;
// declare var alertify: any 
// bu tanım ile uygulamanın angular.json ile yüklenmiş olan kütüphanelerden hangisinde bu alertify komutu varsa bununla
// onu bind etmiş oluyoruz.
// harici bir kütüphane olduğu için declare ederek kullanıyoruz. bu yüzden herhangi bir türümüz mevcut değil (any). 
// dolayısıyla aşağıda alertify. dediğimizde fonksiyonlara erişemiyoruz kendimiz yazmamız gerekiyor. özelleştirmek de 
// istiyoruz örneğin çıkan pencerenin sağ altta değil de sol altta çıkmasını istiyoruz gibi. bunların nasıl yapılacağı
// sitede run example kutucuğunun yanındaki documentation kısımlarında var. fakat biz bunu typescript özelliklerini 
// kullanabileceğimiz hale getireceğiz -> service oluşturarak

// denemek için burada kullanmıştık ama normalde burada kullanmayacağız oluşturduğumuz service te alertify ı kullanacağız. 
// alertify kullanacağımız yerde de service i kullanacağız.
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  // alertify service ini deniyoruz.
  constructor() {} // parametre göndererek alertifyService ini talep ediyoruz.

  ngOnInit(): void {
    // alertify.alert('Ready!');
    // alertify.success('Success message');
    // this.alertify.message("alertify notification deneme", MessagePosition.TopLeft, MessageType.Notify);
  }
}
