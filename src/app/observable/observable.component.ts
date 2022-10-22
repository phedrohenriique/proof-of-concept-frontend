import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add } from '../counter.actions';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  observable$: Observable<any>

  // the observable is like a promise variable, it is being called from the Store object
  // just like a service, the store variable needs to be defined in the main component
  // and in other components so they can get its own state


  constructor(private store: Store<{ counter: number }>) {
    this.observable$ = store.select('counter')
  }

  ngOnInit(): void {
  }

  increaseValue() {
    this.store.dispatch(add())
  }

  stateValue(value: any): any {
    console.log("observable : ", value)
    if (value >= 10) {
      return "Max Value Reached"
    }
    if (value <= 1) {
      return "Minimum Value Reached"
    }
    else {
      return ""
    }
  }

}
