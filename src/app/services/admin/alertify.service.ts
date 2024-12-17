import { Injectable } from '@angular/core';
declare var alertify: any;

// harici bir kütüphane kullanıyorsak mümkün mertebe kendi kullanımımıza göre yönetmek için özelleştirmeler yapmak
// faydalı olacaktır, bunun için bu service i oluşturduk.

@Injectable({
  providedIn: 'root' // bu ifade bu service in dependency injection uygulayabilmemiz için ioc container a 
  // singleton nesne olarak atamasını sağlar. bu ifade olmazsa da app.module.ts de providers kısmına eklersek 
  // service lerin yine ioc containerda nesne oluşturması sağlanır. ve artık dependency injection ile 
  // componentlerden bu service i çağırabiliriz.
})
export class AlertifyService {

  constructor() { }

  // ilgili service üzerinden alertify ı kullanırken hangi metodu kullanacağımızı parametrik hale getirebiliriz;
  // enum içinde metodlarımızı bildireceğiz.
  // message(message: string, position: MessagePosition, messageType: MessageType, delay: number = 3, 
  // dismissOthers: boolean = false){ 
  message(message: string, options: Partial<AlertifyOptions>){ 
    // bu parametreleri bir yerde birleştirip obje şeklinde vermek daha doğrudur. şimdilik böyle olacak.
    // default değer de verebiliriz delay deki gibi.
    // alertify["error"] -> alertify içindeki "error" isimli member ı(metod, property, field olabilir) tetikler.
    // alertify["error"] bunun bir metod olduğunu bildiğimiz için -> alertify["error"]() diyerek belirtebilir, erişebiliriz.
    alertify.set('notifier', 'position', options.position);
    alertify.set('notifier', 'delay', options.delay); // alert in ekranda gözükme süresi (sn)
    const result = alertify[options.messageType](message);
    if(options.dismissOthers) { // dismissOthers metodu arka arkaya sıralı mesaj göndermez. diğerlerini silerek mesaj gönderir.
      result.dismissOthers();
    }
    result;
  }

  dismiss() {
    alertify.dismissAll();
  }
}

export class AlertifyOptions {
  messageType: MessageType = MessageType.Message; // typescriptte class değişkenlerine default değer atamak zorunludur.
  position: MessagePosition = MessagePosition.BottomLeft;
  delay: number = 3;
  dismissOthers: boolean = false;
}

// pratik söylemde angularda bir şeyleri parametrik hale getirmek enum kullanmaktır.

export enum MessageType {
  Error = "error", // bunlardan seçimimize uygun olan metodu belirlemek için "" ile string değer atıyoruz.
  // MessageType ta Error seçerse eğer döndüreceği değer "error" olur.
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}

export enum MessagePosition {
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left",
  BottomCenter = "bottom-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  TopCenter = "top-center",
}