import { Component, OnInit } from '@angular/core';
import {MessageService} from '../service/message.service';

@Component({
  selector: 'app-list-chat',
  templateUrl: './list-chat.component.html',
  styleUrls: ['./list-chat.component.css']
})
export class ListChatComponent implements OnInit {
  messages = [];
  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.messages = this.messageService.messages;
  }
  sendMessage(message) {
    this.messageService.sendMessage(message);
    this.messages = this.messageService.messages;
  }
}
