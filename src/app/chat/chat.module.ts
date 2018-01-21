import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ChatService } from './chat.service';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [ ChatComponent],
  declarations: [ ChatComponent],
  providers: [ ChatService ]
})
export class ChatModule { }
