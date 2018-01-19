import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [
    FooterComponent,
    HeaderModule
  ],
  declarations: [  
    FooterComponent    
  ]
})
export class SharedModule { }
