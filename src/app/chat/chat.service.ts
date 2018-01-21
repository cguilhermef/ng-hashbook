import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Chat } from './chat.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ChatService {

  constructor(
    private http: Http
  ) { }

  send(hash: string, token: string, message: string): Observable<Chat> {
    const url = `http://10.0.0.106:4000/messages-of/${ hash }`;
    /**
     * A api exige, para obter as mensagens de um chat, a requisição
     * informe o token, no cabeçalho 'Authorization'. 'Bearer' é um dos
     * tipos de autorização especificados para o http.
     * Auhtorization e Bearer não são coisas do Angular, mas sim do protocolo
     * HTTP.
     */
    const headers = new Headers({
      'Authorization': `Bearer ${ token }`
    });

    const request = this.http.request(
      url,
      {
        method: 'post',
        headers: headers,
        body: { message: message }
      }
    );

    return request
    .map(response => response.json().data)
    .catch(err => Observable.throw(err));
  }

  update(hash: string, token: string): Observable<Chat> {
    const url = `http://10.0.0.106:4000/messages-of/${ hash }`;

    const headers = new Headers({
      'Authorization': `Bearer ${ token }`
    });

    const request = this.http.request(
      url,
      {
        method: 'get',
        headers: headers
      }
    );

    return request
    .map( response => {
      return response.json().data;
    })
    .catch( err => {
      return Observable.throw(err);
    });
  }

}
