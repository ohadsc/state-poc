import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CounterState } from '../counter/state/counter.state';

@Component({
  selector: 'app-listener',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.scss']
})
export class ListenerComponent implements OnInit {

  //count$: Observable<number>;
  count = 0;

  constructor(private store: Store<CounterState>) {
    //this.count$ = store.pipe(select('count'));
    const storeSubscriberOne = store.select('count').subscribe(state => {
      this.count = state.num
    });
  }

  ngOnInit() {
  }

}
