import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResItemManagementComponent } from './res-item-management.component';

describe('ResItemManagementComponent', () => {
  let component: ResItemManagementComponent;
  let fixture: ComponentFixture<ResItemManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResItemManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResItemManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
