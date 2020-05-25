import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSeatComponent } from './admin-seat.component';

describe('AdminSeatComponent', () => {
  let component: AdminSeatComponent;
  let fixture: ComponentFixture<AdminSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
