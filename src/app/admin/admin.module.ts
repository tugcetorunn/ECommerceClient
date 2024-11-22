import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule, // eğer bir module başka bir module u kendi içinde benimseyecekse o module u import etmesi gerek.
    ComponentsModule
  ],
  exports: [
    LayoutModule,
    ComponentsModule // customerCompenent export süreci-3
  ]
})
export class AdminModule { }
