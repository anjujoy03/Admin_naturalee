import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomertblComponent } from './customertbl.component';

describe('CustomertblComponent', () => {
  let component: CustomertblComponent;
  let fixture: ComponentFixture<CustomertblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomertblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomertblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
