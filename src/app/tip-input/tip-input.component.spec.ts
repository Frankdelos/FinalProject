import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipInputComponent } from './tip-input.component';

describe('TipInputComponent', () => {
  let component: TipInputComponent;
  let fixture: ComponentFixture<TipInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
