import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CounterState, getCounter } from '../counter/state/counter.state';
import { ClockState, getColor } from '../clock/state/clock.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listener',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.scss']
})
export class ListenerComponent implements OnInit {

  count$: Observable<number>;
  color$: Observable<string>;

  constructor(private counterStore: Store<CounterState>, private clockStore: Store<ClockState> ) {
    this.count$ = this.counterStore.select(
      getCounter
    );

    this.color$ = clockStore.select(
      getColor
    );
  }

  ngOnInit() {
  }

}
