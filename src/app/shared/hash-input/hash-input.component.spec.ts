import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashInputComponent } from './hash-input.component';

describe('HashInputComponent', () => {
  let component: HashInputComponent;
  let fixture: ComponentFixture<HashInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
