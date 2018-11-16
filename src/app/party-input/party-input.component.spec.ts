import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyInputComponent } from './party-input.component';

describe('PartyInputComponent', () => {
  let component: PartyInputComponent;
  let fixture: ComponentFixture<PartyInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
