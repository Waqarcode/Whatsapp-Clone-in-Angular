import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() ConversationClicked: EventEmitter<any> = new EventEmitter();

  searchText: any;
  conversations = [
    {
      name: "Umer Aziz", time: "3:45 PM", latestmessage: "hi", messageRead: true,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]

    },
    {
      name: "Danial Sohail", time: "5:45 PM", latestmessage: "pathan ka dhaba ah ja", messageRead: true,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Zain Ali", time: "7:45 PM", latestmessage: "Kidra Ha??", messageRead: true,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Abdul Moeez", time: "9:45 PM", latestmessage: "oye", messageRead: true,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Abdul Hanan", time: "10:45 PM", latestmessage: "AoA, kasa ho", messageRead: true,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Hussain Ali", time: "11:45 AM", latestmessage: "Good Gorning", messageRead: true,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Waqas Ali", time: "12:45 PM", latestmessage: "Kidra ha", messageRead: false,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Hasan ctn", time: "tomorrow", latestmessage: "Video", messageRead: false,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Amjad ctn", time: "tomorrow", latestmessage: "Pice", messageRead: false,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Samran ctn", time: "tomorrow", latestmessage: "Send kr", messageRead: false,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Ahmad haseeb", time: "tomorrow", latestmessage: "Send kr", messageRead: false,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Ahmad Aziz", time: "tomorrow", latestmessage: "Send kr", messageRead: false,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Hamza khalid", time: "tomorrow", latestmessage: "Send kr", messageRead: false,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Saad saleem", time: "tomorrow", latestmessage: "Send kr", messageRead: false,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Rana Bazil", time: "9:45 PM", latestmessage: "Send kr", messageRead: false,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Abdul Rehman", time: "7:45 PM", latestmessage: "Send kr", messageRead: true,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Abdullah lhr", time: "6:45 PM", latestmessage: "Send kr", messageRead: true,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Bilal Waqas", time: "1:45 PM", latestmessage: "Send kr", messageRead: true,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Hussan Nasir", time: "12:00 AM", latestmessage: "Send kr", messageRead: false,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    },
    {
      name: "Kashif ctn", time: "10:05 AM", latestmessage: "Send kr", messageRead: true,
      message: [
        { id: 1, body: "Hello", time: "8:21", me: true },
        { id: 2, body: "How are you", time: "8:21", me: false },
        { id: 3, body: "i am fine thanks", time: "8:21", me: true },
        { id: 4, body: "Glad to hear that", time: "8:21", me: false },
      ]
    }

  ]

  get filteredConversation(){
    return this.conversations.filter((conversation) =>{
      return conversation.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      conversation.latestmessage.toLowerCase().includes(this.searchText.toLowerCase());
    })
  }
  constructor() { } 

  ngOnInit(): void {
  }

}
