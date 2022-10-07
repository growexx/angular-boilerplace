import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/core/services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  title = 'webSocket';
  content = '';
  received: any = [];
  sent: any = [];

  constructor(private WebsocketService: WebsocketService) {

  }

  ngOnInit() {
    this.WebsocketService.messages.subscribe((msg: any) => {
      console.log(msg)
      this.received.push(msg);
      console.log("Response from websocket: " + msg);
    });
  }

  sendMsg() {
    let message = {
      source: '',
      content: ''
    };
    message.source = 'localhost';
    message.content = this.content;

    this.sent.push(message);
    this.WebsocketService.messages.next(message);
  }

}
