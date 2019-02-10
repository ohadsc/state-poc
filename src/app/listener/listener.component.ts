import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CounterState, getCounter, getCounterX } from '../counter/state/counter.state';
import { ClockState, getColor, getMask } from '../clock/state/clock.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listener',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.scss']
})
export class ListenerComponent implements OnInit {

  count$: Observable<number>;
  countX2$: Observable<number>;
  color$: Observable<string>;
  mask$: Observable<string>;

  constructor(private counterStore: Store<CounterState>, private clockStore: Store<ClockState> ) {
    this.count$ = this.counterStore.select(
      getCounter
    );

    this.countX2$ = this.counterStore.select(
      getCounterX, { multiply: 2 }
    );

    

    this.color$ = clockStore.select(
      getColor
    );

    this.mask$ = clockStore.select(
      getMask
    );
  }

  ngOnInit() {
  }

}
