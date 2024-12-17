import { Component } from '@angular/core';
// jquery entegrasyonunu test etmek için;
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerceClient';
}

// mesaj penceresi çıkarma;
// $(document).ready(() => {
//   alert("jquery deneme")
// })