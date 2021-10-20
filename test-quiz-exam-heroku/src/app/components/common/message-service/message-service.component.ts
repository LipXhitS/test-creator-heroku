import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-message-service',
  templateUrl: './message-service.component.html',
  styleUrls: ['./message-service.component.css']
})
export class MessageServiceComponent implements OnInit {

  message: string = "";
  type: string = "";

  constructor(
    private messageService: MessageServiceService
  ) { }

  ngOnInit(): void {
    this.message = this.messageService.message;
    this.type = this.type;
  }

}
