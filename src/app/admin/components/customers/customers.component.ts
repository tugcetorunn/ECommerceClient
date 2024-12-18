import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent extends BaseComponent implements OnInit {

  // oop de olduğu gibi bir B classı, A classından miras alıyor ve bu A classı constructorında parametre içeriyorsa, 
  // miras alan B classı da aynı tipte parametre üretip bunu base yani A classına göndermeli. base e gönderme işlemi 
  // burada javaya benzer super metodu ile base classa ulaşılıp gönderilir.
  constructor(spinner: NgxSpinnerService) { // private yapmamamız gerekiyor.
    super(spinner); // super ile base sınıfın constructorına erişiyoruz.
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallFall);
  }


}
