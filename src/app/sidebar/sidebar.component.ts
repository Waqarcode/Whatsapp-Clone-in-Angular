import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() ConversationClicked: EventEmitter<any> = new EventEmitter();
  
   conversations = [
    {name: "Umer Aziz", time: "3:45 PM", latestmessage:"hi", messageRead:true},
    {name: "Danial Sohail", time: "5:45 PM", latestmessage:"pathan ka dhaba ah ja", messageRead:true},
    {name: "Zain Ali", time: "7:45 PM", latestmessage:"Kidra Ha??", messageRead:true},
    {name: "Abdul Moeez", time: "9:45 PM", latestmessage:"oye", messageRead:true},
    {name: "Abdul Hanan", time: "10:45 PM", latestmessage:"AoA, kasa ho", messageRead:true},
    {name: "Hussain Ali", time: "11:45 AM", latestmessage:"Good Gorning", messageRead:true},
    {name: "Waqas Ali", time: "12:45 PM", latestmessage:"Kidra ha", messageRead:false},
    {name: "Hasan ctn", time: "tomorrow", latestmessage:"Video", messageRead:false},
    {name: "Amjad ctn", time: "tomorrow", latestmessage:"Pice", messageRead:false},
    {name: "Samran ctn", time: "tomorrow", latestmessage:"Send kr", messageRead:false},
    {name: "Ahmad haseeb", time: "tomorrow", latestmessage:"Send kr", messageRead:false},
    {name: "Ahmad Aziz", time: "tomorrow", latestmessage:"Send kr", messageRead:false},
    {name: "Hamza khalid", time: "tomorrow", latestmessage:"Send kr", messageRead:false},
    {name: "Saad saleem", time: "tomorrow", latestmessage:"Send kr", messageRead:false},
    {name: "Rana Bazil", time: "9:45 PM", latestmessage:"Send kr", messageRead:false},
    {name: "Abdul Rehman", time: "7:45 PM", latestmessage:"Send kr", messageRead:true},
    {name: "Abdullah lhr", time: "6:45 PM", latestmessage:"Send kr", messageRead:true},
    {name: "Bilal Waqas", time: "1:45 PM", latestmessage:"Send kr", messageRead:true},
    {name: "Hussan Nasir", time: "12:00 AM", latestmessage:"Send kr", messageRead:false},
    {name: "Kashif ctn", time: "10:05 AM", latestmessage:"Send kr", messageRead:true}
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
