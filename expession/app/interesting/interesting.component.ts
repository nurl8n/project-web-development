import { Component, OnInit } from '@angular/core';
import {Fact} from '../fact';

@Component({
  selector: 'app-interesting',
  templateUrl: './interesting.component.html',
  styleUrls: ['./interesting.component.css']
})
export class InterestingComponent implements OnInit {
  newFacts: Fact[];
  currentFact: Fact;
  constructor() {
    this.newFacts = [new Fact(1, 'IN 1889, THE QUEEN OF ITALY, MARGHERITA SAVOY, ORDERED THE FIRST PIZZA DELIVERY.'), new Fact(2, 'YOU CAN BUY EEL FLAVORED ICE CREAM IN JAPAN.'), new Fact(3, 'IT\'S CONSIDERED RUDE TO WRITE IN RED INK IN PORTUGAL.')];
    this.currentFact = new Fact();
  }

  ngOnInit(): void {
  }

  addFact() {
    if (this.currentFact.title !== '') {
      this.currentFact.id = this.newFacts.length + 1;
      this.newFacts.push(this.currentFact);
    }
  }

  removeFact(index: number) {
    this.newFacts = this.newFacts.filter((x) => x.id !== index);
  }
}
