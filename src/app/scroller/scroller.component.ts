import { Component, OnInit } from '@angular/core';
import { ChangeEvent } from 'ngx-virtual-scroller';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss']
})
export class ScrollerComponent implements OnInit {

  //items = []
  loading: boolean;
  buffer = [];

  constructor() {
    // debugger;
    // for (let i = 0; i < 600000; i++) {
    //   let randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    //   this.items.push({
    //     title: i,
    //     description: randomString,
    //     title2: i,
    //     description2: randomString,
    //     title3: i,
    //     description3: randomString
    //   });
    // }
  }

  ngOnInit() {
  }

  fetchNextChunk(skip: number, limit: number): Observable<any> {
    debugger;
    return of({title: Math.random().toString(36).substring(2, 15), description: Math.random().toString(36).substring(2, 15)});
  }

  protected fetchMore(event: ChangeEvent) {
    if (event.end !== this.buffer.length - 1) return;
    this.loading = true;
    this.fetchNextChunk(this.buffer.length, 10).subscribe(chunk => {
      this.buffer = this.buffer.concat(chunk);
      this.loading = false;
    }, () => this.loading = false);
  }

}
