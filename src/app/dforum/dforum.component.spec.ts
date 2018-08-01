import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DforumComponent } from './dforum.component';

describe('DforumComponent', () => {
  let component: DforumComponent;
  let fixture: ComponentFixture<DforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
