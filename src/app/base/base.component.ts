import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html'
})
export class BaseComponent { // bu componenti neden oluşturduk?
  // spinner ile örn. componentler arası geçişte s1 spinner ını, bir tuşa basıp api dan bir liste çekmeyi beklerken de
  // s2 spinner ını çalıştırmak istiyoruz. bunun için her kullanacağımız component.ts de service i entegre etmek metodları
  // tekrar tekrar oluşturmak yerine admin ve ui ortak şekilde bu iş için bu componenti oluşturduk.
  // bu component bir class olarak işimizi görecek bu yüzden selector, html, css dosyaları önemli olmayacak silebiliriz. 
  // component declaration ına bile ihtiyacımız yok.
  
  constructor(private spinner: NgxSpinnerService) { }

  showSpinner(typeName: SpinnerType) { 
    this.spinner.show(typeName);

    setTimeout(() => { // işlem olana kadar bekleme anlarında değil de örn liste getirilirken sabit sürede önden animasyon çalışması için
      this.hideSpinner(typeName)
    }, 1000);
  }

  hideSpinner(typeName: SpinnerType) {
    this.spinner.hide(typeName); // süresiz hide operasyonu ayrı, showda da belirli süreli hide kullanıyoruz şimdilik.
  }
}

export enum SpinnerType { // metinsel parametreleri seçilebilir hale getirmek örn bundan bir kaç ay sonra bu 
// spinnerlara verilen isimleri unutabileceğimizden dolayı anlaşılır bir liste halinde tutmak işimizi kolaylaştırır.
  BallFall = "s1",
  BallSpin = "s2",
  Timer = "s3"
}

// componentimizi ve metodlarımızı yazdıktan sonra routing işleminde kullanacağımız componentlere base componenti 
// miras veriyoruz. hangi componentler -> admin için customers, products, orders, dashboard / ui için home, products,
// baskets (bizim için sayfa anlamına gelen componentler routing componentleridir. header, footer vs değil.)
// bu componentlerin ts dosyalarında extends keywordü ile baseComponenti miras veriyoruz.