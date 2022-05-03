import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDayComponent } from './calendars-day.component';

describe('CardsDayComponent', () => {
  let component: CardsDayComponent;
  let fixture: ComponentFixture<CardsDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
