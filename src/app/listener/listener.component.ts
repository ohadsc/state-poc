import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CounterState } from '../counter/state/counter.state';
import { ClockState } from '../clock/state/clock.state';

@Component({
  selector: 'app-listener',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.scss']
})
export class ListenerComponent implements OnInit {

  //count$: Observable<number>;
  count = 0;
  color = 'black';

  constructor(private counterStore: Store<CounterState>, private clockStore: Store<ClockState> ) {
    //this.count$ = store.pipe(select('count'));
    counterStore.select('count').subscribe(state => {
      this.count = state.num
    });

    clockStore.select('clock').subscribe(state => {
      this.color = state.color;
    });
  }

  ngOnInit() {
  }

}
