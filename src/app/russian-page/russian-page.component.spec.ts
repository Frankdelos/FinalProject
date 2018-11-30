import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RussianPageComponent } from './russian-page.component';

describe('RussianPageComponent', () => {
  let component: RussianPageComponent;
  let fixture: ComponentFixture<RussianPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RussianPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RussianPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
