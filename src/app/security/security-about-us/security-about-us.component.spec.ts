import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAboutUsComponent } from './security-about-us.component';

describe('SecurityAboutUsComponent', () => {
  let component: SecurityAboutUsComponent;
  let fixture: ComponentFixture<SecurityAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
