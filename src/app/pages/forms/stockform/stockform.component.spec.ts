import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockformComponent } from './stockform.component';

describe('StockformComponent', () => {
  let component: StockformComponent;
  let fixture: ComponentFixture<StockformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
