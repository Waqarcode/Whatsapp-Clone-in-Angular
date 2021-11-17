import { Component, Input, OnInit } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
@Input() conversation: any;
emojiPickerVisiable: boolean = false;
message = ""
  constructor() { }

  ngOnInit(): void {
    console.log('hi'); 
  }

  
  submitMessage(event:any){
    let value = event.target.value.trim();
    //alert(event.target.value);
    //event.target.value = '';
    this.message = '';
    this.conversation.latestmessage = value;
    if(!(value.length < 1)) {
      this.conversation.message.unshift(
        { 
          id: 1, 
          body: value, 
          time: "10:20", 
          me: true }
  
      );
    }
  }
  
  emojiClicked(event: any)
  {
    //debugger;
    //console.info(emoji);
    this.message += event.emoji.native;
  }
}

