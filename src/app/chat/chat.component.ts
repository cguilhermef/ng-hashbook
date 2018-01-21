import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from './message.model';
import { ChatService } from './chat.service';
import { Chat } from './chat.model';

@Component({
  selector: 'hb-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chat: Chat;
  hash: string;
  processing: boolean;
  message: string;
  token: string;
  @ViewChild('newText') inputText;
  constructor(
    private route: ActivatedRoute,
    private service: ChatService
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe (
      params => {
        this.hash = params.get('hash');
        this.token = params.get('token');
        this.refresh();
      }
    );
  }

  get messages(): Message[] {
    return this.chat ? this.chat.messages : [];
  }

  colorBy(token: string): string {
    return `#${ token.slice(0, 6)}`;
  }

  send(newText: string) {
    if (this.processing) {
      return;
    }
    if (!this.message || this.message.length === 0) {
      return;
    }
    this.service.send(this.hash, this.token, this.message)
    .subscribe(
      response => {
        console.log(response);
        this.chat = response;
        this.message = null;
        this.processing = false;
      },
      err => {
        console.warn('Ocorreu um erro ao enviar a messagem');
        this.processing = false;
      },
      () => {
        this.processing = false;
      }
    )
  }

  refresh() {
    if (this.processing) {
      return;
    }
    this.processing = true;
    this.service.update(this.hash, this.token)
    .subscribe(
      response=> {
        this.chat = response;
        this.processing = false;
      },
      err => {
        this.processing = false;
        console.warn('Ocorreu um erro ao atualizar');
      },
      () => {
        this.processing = false;
      }
    )
  }
}
