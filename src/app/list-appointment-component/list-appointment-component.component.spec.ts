import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppointmentComponentComponent } from './list-appointment-component.component';

describe('ListAppointmentComponentComponent', () => {
  let component: ListAppointmentComponentComponent;
  let fixture: ComponentFixture<ListAppointmentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAppointmentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppointmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
