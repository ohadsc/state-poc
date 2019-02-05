import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ClockState } from './state/clock.state';
import { UpdateColor, UpdateMask } from './state/clock.actions';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  constructor(private store: Store<ClockState>) {
    const storeSubscriber = store.select('clock').subscribe(state => {
      this.mask = state.mask;
      this.color = state.color;
    });
  }

  mask = 'HH:mm:ss';
  color = 'black';
  timerId = null;
  Clock = Date.now();

  ngOnInit() {
    this.initClock();
  }

  initClock() {
    this.timerId = setInterval(() => {
      this.Clock = Date.now();
    }, 1000);
  }

  updateColor(value) {
    this.store.dispatch(new UpdateColor({ color: value }));
  }

  updateMask(value) {
    this.store.dispatch(new UpdateMask({ mask: value }));
  }


}
