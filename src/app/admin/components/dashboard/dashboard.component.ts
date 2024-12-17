import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessagePosition, MessageType, AlertifyOptions } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {

  }

  m() {
    // var options = new AlertifyOptions();
    // options.messageType = MessageType.Error;
    // options.position = MessagePosition.TopRight;
    // this.alertify.message("alertify notification deneme", options);

    // YA DA (JS nimetlerinden yararlanarak alertyOptions ı metodda partial olarak verirsek aşağıdaki şekilde değer atayabiliriz, partial yaptığımıda objeye "()" müsait hale gelmiş oluyor)

    this.alertify.message("deneme 123", {
      messageType: MessageType.Error,
      position: MessagePosition.TopRight,
      delay: 5
    })
  }

  d() {
    this.alertify.dismiss();
  }
}
