import { Component, OnInit } from '@angular/core';
import {MessageService} from '../service/message.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  sendMessage(message) {
    // this.messageService.changeMessage(message);
  }
}
