import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPopularListComponent } from './hotel-popular-list.component';

describe('HotelPopularListComponent', () => {
  let component: HotelPopularListComponent;
  let fixture: ComponentFixture<HotelPopularListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelPopularListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelPopularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
