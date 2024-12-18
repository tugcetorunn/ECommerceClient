import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AlertifyService, MessagePosition, MessageType } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit{

  constructor(spinner: NgxSpinnerService, private alertify: AlertifyService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallFall);
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
