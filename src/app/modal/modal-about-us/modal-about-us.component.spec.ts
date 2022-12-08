import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAboutUsComponent } from './modal-about-us.component';

describe('ModalAboutUsComponent', () => {
  let component: ModalAboutUsComponent;
  let fixture: ComponentFixture<ModalAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
