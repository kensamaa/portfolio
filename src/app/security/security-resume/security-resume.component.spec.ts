import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityResumeComponent } from './security-resume.component';

describe('SecurityResumeComponent', () => {
  let component: SecurityResumeComponent;
  let fixture: ComponentFixture<SecurityResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
