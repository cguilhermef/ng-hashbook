import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'hb-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  hash: string;
  messages: Message[];
  @ViewChild('newText') inputText;
  constructor() { }

  ngOnInit() {
    this.hash = 'abc-123';
    this.messages = [
      {
        text: 'Olá',
        me: false
      },
      {
        text: 'oi!',
        me: true
      },
      {
        text: 'tudo?',
        me: true
      }
    ];
  }

  send(newText: string) {
    if (!newText) {
      return;
    }
    if (this.messages.length >= 10) {
      this.messages = this.messages.slice(1, 9);
    }
    this.messages.push({
      text: newText,
      me: true
    });
    this.inputText.nativeElement.value = null;
  }
}
