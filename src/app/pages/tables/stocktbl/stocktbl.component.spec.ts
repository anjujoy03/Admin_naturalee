import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocktblComponent } from './stocktbl.component';

describe('StocktblComponent', () => {
  let component: StocktblComponent;
  let fixture: ComponentFixture<StocktblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocktblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocktblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
