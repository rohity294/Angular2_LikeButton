import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementCounter(): void {
    this.counter++;
  }

  decrementCounter(): void {
    if(this.counter==0){
      alert("counter value cannot be negative");
      return;
    }
    this.counter--;
  }

}
