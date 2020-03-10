import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages = [];
  constructor() { }
  sendMessage(message) {
    this.messages.push(message);
  }
}
