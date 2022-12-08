import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityIndexComponent } from './security-index.component';

describe('SecurityIndexComponent', () => {
  let component: SecurityIndexComponent;
  let fixture: ComponentFixture<SecurityIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
