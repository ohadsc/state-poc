import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
//import { Observable } from 'rxjs';
import { Increment, Decrement, Reset, Update } from './state/counter.actions';
import { CounterState } from './state/counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent implements OnInit {

  //count$: Observable<number>;
  count = 0

  constructor(private store: Store<CounterState>) {
    //this.count$ = store.pipe(select('count'));
    const storeSubscriberOne = store.select('count').subscribe(state => {
      this.count = state.num
    });
  }

  ngOnInit(){}

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }

  update(value: number) {
    debugger;
    this.store.dispatch(new Update({num: value}));
  }
}
