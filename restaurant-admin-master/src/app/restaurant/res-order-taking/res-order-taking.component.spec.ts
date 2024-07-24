import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResOrderTakingComponent } from './res-order-taking.component';

describe('ResOrderTakingComponent', () => {
  let component: ResOrderTakingComponent;
  let fixture: ComponentFixture<ResOrderTakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResOrderTakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResOrderTakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
