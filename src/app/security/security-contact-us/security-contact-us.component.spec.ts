import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityContactUsComponent } from './security-contact-us.component';

describe('SecurityContactUsComponent', () => {
  let component: SecurityContactUsComponent;
  let fixture: ComponentFixture<SecurityContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
