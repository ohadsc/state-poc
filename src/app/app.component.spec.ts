import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ListenerComponent } from './listener/listener.component';
import { ClockComponent } from './clock/clock.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { FormsModule } from '@angular/forms';
import { VirtualScrollerComponent } from 'ngx-virtual-scroller';
import { StoreModule  } from '@ngrx/store';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        StoreModule.forRoot({})

      ],
      declarations: [
        AppComponent,
        CounterComponent,
        ListenerComponent,
        ClockComponent,
        ScrollerComponent,
        VirtualScrollerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'state-poc'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('state-poc');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to state-poc!');
  });
});
