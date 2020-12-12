import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerordertblComponent } from './customerordertbl.component';

describe('CustomerordertblComponent', () => {
  let component: CustomerordertblComponent;
  let fixture: ComponentFixture<CustomerordertblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerordertblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerordertblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
