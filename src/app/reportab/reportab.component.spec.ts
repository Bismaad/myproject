import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportabComponent } from './reportab.component';

describe('ReportabComponent', () => {
  let component: ReportabComponent;
  let fixture: ComponentFixture<ReportabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
