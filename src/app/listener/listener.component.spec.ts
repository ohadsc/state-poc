import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerComponent } from './listener.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

describe('ListenerComponent', () => {
  let component: ListenerComponent;
  let fixture: ComponentFixture<ListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        StoreModule.forRoot({})
      ],
      declarations: [
        ListenerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
