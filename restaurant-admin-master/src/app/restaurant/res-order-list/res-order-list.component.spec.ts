import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResOrderListComponent } from './res-order-list.component';

describe('ResOrderListComponent', () => {
  let component: ResOrderListComponent;
  let fixture: ComponentFixture<ResOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
