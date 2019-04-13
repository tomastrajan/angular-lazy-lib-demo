import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeLibComponent } from './some-lib.component';

describe('SomeLibComponent', () => {
  let component: SomeLibComponent;
  let fixture: ComponentFixture<SomeLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
