import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPortfolioComponent } from './security-portfolio.component';

describe('SecurityPortfolioComponent', () => {
  let component: SecurityPortfolioComponent;
  let fixture: ComponentFixture<SecurityPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
