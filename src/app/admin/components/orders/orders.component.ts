import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void {
    // this.spinner.show("s1");

    // setTimeout(() => {
    //   this.spinner.hide("s1");
    // }, 5000); // spinner ı 5 sn sonra kapatır.

    this.showSpinner(SpinnerType.BallFall);
  }

}
