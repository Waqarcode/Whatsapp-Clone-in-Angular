import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  convesation: any
  
  onConvertionSelected(convesation: any){
    this.convesation = convesation;
  }
}
