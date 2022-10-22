import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add, remove } from '../counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter$: Observable<number>; // $ means that the variable is an observable

  constructor(private store: Store<{ counter: number }>) {
    this.counter$ = store.select('counter');
  }

  ngOnInit(): void {
  }

  add(): void {
    this.store.dispatch(add())
  }

  remove(): void {
    this.store.dispatch(remove())
  }

}
