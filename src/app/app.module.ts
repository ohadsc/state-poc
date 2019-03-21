import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './counter/state/counter.reducer';
import { clockReducer } from './clock/state/clock.reducer';
import { ListenerComponent } from './listener/listener.component';
import { FormsModule } from '@angular/forms';
import { ClockComponent } from './clock/clock.component';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { ScrollerComponent } from './scroller/scroller.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';


// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ListenerComponent,
    ClockComponent,
    ScrollerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer, clock: clockReducer },  { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    FormsModule,
    VirtualScrollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
