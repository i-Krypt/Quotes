import { Component } from '@angular/core';
import { Quote } from './quote';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  quote = 'Marvel-Movies quotes'
  quotes:string[];



  constructor(){
    this.quotes=['Gonna eat till I’m tired and then sleep till I’m hungry','Never underestimate the stupidity of idiots','What’s a nice place like you doing in a girl like this']
  }
}
