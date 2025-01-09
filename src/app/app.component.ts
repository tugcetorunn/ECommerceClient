import { Component } from '@angular/core';
import { CustomToastrService } from './services/ui/custom-toastr.service';

declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerceClient';

  constructor(private toastr: CustomToastrService) {    
  }
}

// jquery üzerinden apimize istek göndereceğiz. 
// bu satır ile javascripti kullanarak browser üzerinden hedef endpointe istek gönderebiliriz.

$.get("https://localhost:7166/api/products", data => { // istek neticesinde dönen datayı console a yazdırıyoruz.
  console.log(data)
});