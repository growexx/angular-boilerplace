import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Message {
  source: string;
  content: string;
} 

@Injectable({
  providedIn: 'root'
})




export class WebsocketService {
   CHAT_URL = "ws://219.91.220.219:4201"

  private subject!: AnonymousSubject<MessageEvent>;
  public messages: Subject<Message>;

  constructor() {
      this.messages = <Subject<Message>>this.connect(this.CHAT_URL).pipe(
          map(
              (response: MessageEvent): Message => {
                  let data = JSON.parse(response.data)
                  return data;
              }
          )
      );
  }

  public connect(url:any): AnonymousSubject<MessageEvent> {
      if (!this.subject) {
          this.subject = this.create(url);
      }
      return this.subject;
  }

  private create(url:any): AnonymousSubject<MessageEvent> {
      let ws = new WebSocket(url);
      let observable = new Observable((obs: Observer<MessageEvent>) => {
          ws.onmessage = obs.next.bind(obs);
          ws.onerror = obs.error.bind(obs);
          ws.onclose = obs.complete.bind(obs);
          return ws.close.bind(ws);
      });
      let observer:any = {
          error: null,
          complete: null,
          next: (data: Object) => {
              if (ws.readyState === WebSocket.OPEN) {
                  ws.send(JSON.stringify(data));
              }
          }
      };
      return new AnonymousSubject<MessageEvent>(observer, observable);
  }
}