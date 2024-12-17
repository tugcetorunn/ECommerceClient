import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessagePosition, ToastrMessageType } from './services/ui/custom-toastr.service';
// jquery entegrasyonunu test etmek için;
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerceClient';

  // constructor(private toastr: ToastrService) { // toastrService yüklemeden sonra node_modules içinde kendi geliyor.
  constructor(private toastr: CustomToastrService) { // custom service imizi yazdığımıza göre onu ekliyoruz.
    // toastr.success("Merhaba", "Tuğçe Torun"); // success metodunun üstüne geldiğimizde override isimli parametreyi 
    // görebiliriz. partial olduğu için bir js objesi ile belli değerler atanabilir.

    toastr.message("Tuğçe", "Hello", {
      messageType: ToastrMessageType.Info,
      position: ToastrMessagePosition.BottomRight
    });    
    toastr.message("Tuğçe", "Hello", {
      messageType: ToastrMessageType.Success,
      position: ToastrMessagePosition.TopRight
    });   
    toastr.message("Tuğçe", "Hello", {
      messageType: ToastrMessageType.Error,
      position: ToastrMessagePosition.BottomLeft
    });   
    toastr.message("Tuğçe", "Hello", {
      messageType: ToastrMessageType.Warning,
      position: ToastrMessagePosition.TopLeft
    });     
  }
}

// mesaj penceresi çıkarma;
// $(document).ready(() => {
//   alert("jquery deneme")
// })