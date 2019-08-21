import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  // upvotes:number ;
  // downvotes:number;


  quotes:Quote[] = [
    new Quote(1, 'Deadpool', 'Gonna eat till I’m tired and then sleep till I’m hungry','Jeff',0,0,new Date(2019,5,8)),
    new Quote(2,'Wolverine','Nature made me a freak, man made me a weapon and God made it last too long.','Jeff',0,0,new Date(2019,7,9)),
    
  ];


  deleteQuote(isComplete, index){
    if(isComplete){
      let toDelete = confirm('Are you sure you want to delete this quote?')

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote);
  }
  // constructor() {
  //   this.upvotes = 0;
  //   this.downvotes = 0;
  // }
  // upVote(): boolean {
  //   this.upvotes += 1;
  //   return false;
  // }
  // downVote(): boolean {
  //   this.downvotes += 1;
  //   return false;
  // }
  // upvotes: number = 0;
  //   upvotesClick() {
  //   this.upvotes ++;
  // }

  // downvotes: number = 0;
  // downvotesClick() {
  //   this.downvotes ++;
  // }
 
 
  ngOnInit() {
  }

}
