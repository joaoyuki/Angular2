import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //O messageService precisa ser publico para que possa ser feito o binding no template
  //O bind só acontece para propriedades publicas
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
