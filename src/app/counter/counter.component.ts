import { Component, OnInit } from '@angular/core';
import { Store, select, StoreModule } from '@ngrx/store';
//import { Observable } from 'rxjs';
import { Increment, Decrement, Reset, Update } from './state/counter.actions';
import { CounterState, getCounter } from './state/counter.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<CounterState>) {
    this.count$ = this.store.select(
      getCounter
    );
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
