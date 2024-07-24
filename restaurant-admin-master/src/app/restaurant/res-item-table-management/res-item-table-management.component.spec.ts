import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResItemTableManagementComponent } from './res-item-table-management.component';

describe('ResItemTableManagementComponent', () => {
  let component: ResItemTableManagementComponent;
  let fixture: ComponentFixture<ResItemTableManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResItemTableManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResItemTableManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
