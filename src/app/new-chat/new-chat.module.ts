import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewChatComponent } from './new-chat.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NewChatService } from './new-chat.service';

const routes: Routes = [
  {
    path: ':code',
    component: NewChatComponent
  },
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
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [ NewChatComponent],
  declarations: [NewChatComponent],
  providers: [ NewChatService ]
})
export class NewChatModule { }
