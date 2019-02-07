import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ClockState, getMask, getColor } from './state/clock.state';
import { UpdateColor, UpdateMask } from './state/clock.actions';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  //private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store: Store<ClockState>) {
    // store.select(
    //   getMask
    // ).pipe(takeUntil(this.ngUnsubscribe)).subscribe(mask => {
    //   this.mask = mask;
    // });
    this.mask$ = store.select(
      getMask
    );

    this.color$ = store.select(
      getColor
    );
  }

  //mask: string
  mask$: Observable<string>
  color$: Observable<string>
  Clock = Date.now();

  ngOnInit() {
    this.initClock();
  }

  initClock() {
    setInterval(() => {
      this.Clock = Date.now();
    }, 1000);
  }

  updateColor(value) {
    this.store.dispatch(new UpdateColor({ color: value }));
  }

  updateMask(value) {
    this.store.dispatch(new UpdateMask({ mask: value }));
  }

  // ngOnDestroy() {
  //   this.ngUnsubscribe.next();
  //   this.ngUnsubscribe.complete();
  // }

}
