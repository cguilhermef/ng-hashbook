import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashComponent } from './hash.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HashInputModule } from '../shared/hash-input/hash-input.module';
const routes: Routes = [
  {
    path: '',
    component: HashComponent,
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HashInputModule,
    SharedModule
  ],
  exports: [ HashComponent ],
  declarations: [ HashComponent ]
})
export class HashModule { }
