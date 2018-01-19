import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'chat',
    loadChildren: './chat/chat.module#ChatModule'
  },
  {
    path: 'new-chat',
    loadChildren: './new-chat/new-chat.module#NewChatModule'
  },
  {
    path: 'hash',
    loadChildren: './hash/hash.module#HashModule'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
