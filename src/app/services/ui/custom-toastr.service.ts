import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root' // bu satır sayesinde bu service direk ioc container a eklenecektir. dolayısıyla di ile talep 
  // edilebilir hale gelir. yani constructor ile çağırılabilir.
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { } // toastr a di ile erişiyoruz.
  // message(message: string, title: string, messageType: ToastrMessageType, 
  // position: ToastrMessagePosition = ToastrMessagePosition.TopRight){
    message(message: string, title: string, options: Partial<ToastrOptions>) {
    this.toastr[options.messageType](message, title, { // override parametresi alıyor içerisinde optionsların ayarlanabileceği.
      positionClass: options.position
    }); // metod olduğunu biliyorsak parantezleri () unutmayalım.
  }
}

export class ToastrOptions {
  messageType: ToastrMessageType = ToastrMessageType.Info;
  position: ToastrMessagePosition = ToastrMessagePosition.TopRight; 
}

export enum ToastrMessageType {
  Error = "error",
  Info = "info",
  Success = "success",
  Warning = "warning"
}

export enum ToastrMessagePosition {
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  BottomCenter = "toast-bottom-center",
  BottomFullWidth = "toast-bottom-full-width",
  TopRight = "toast-top-right",
  TopLeft = "toast-top-left",
  TopCenter = "toast-top-center",
  TopFullWidth = "toast-top-full-width"
}