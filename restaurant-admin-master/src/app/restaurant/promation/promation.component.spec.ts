import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromationComponent } from './promation.component';

describe('PromationComponent', () => {
  let component: PromationComponent;
  let fixture: ComponentFixture<PromationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
