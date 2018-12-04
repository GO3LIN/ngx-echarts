import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEchartsLibComponent } from './ngx-echarts-lib.component';

describe('NgxEchartsLibComponent', () => {
  let component: NgxEchartsLibComponent;
  let fixture: ComponentFixture<NgxEchartsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxEchartsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEchartsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
