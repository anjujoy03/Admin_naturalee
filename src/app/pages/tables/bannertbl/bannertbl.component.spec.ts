import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannertblComponent } from './bannertbl.component';

describe('BannertblComponent', () => {
  let component: BannertblComponent;
  let fixture: ComponentFixture<BannertblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannertblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannertblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
