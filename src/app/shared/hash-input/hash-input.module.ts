import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashInputComponent } from './hash-input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ HashInputComponent ],
  declarations: [HashInputComponent]
})
export class HashInputModule { }
