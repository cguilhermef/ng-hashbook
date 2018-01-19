import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewChatComponent } from './new-chat.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NewChatComponent,
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [ NewChatComponent],
  declarations: [NewChatComponent]
})
export class NewChatModule { }
