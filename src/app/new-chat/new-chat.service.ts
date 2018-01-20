import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class NewChatService {

  constructor(
    private http: Http
  ) { }

  start(hash: string, secret: string): Observable<any> {
    const url = 'http://10.0.1.113:4000/start';

    return this.http.post(url, {
      hash: hash,
      secret: secret
    })
    .map( response => {
      return response.json().data;
    })
    .catch( err => {
      return Observable.throw(err);
    });
  }
}
