import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatConfirmModalComponent } from './mat-confirm-modal.component';

describe('MatConfirmModalComponent', () => {
  let component: MatConfirmModalComponent;
  let fixture: ComponentFixture<MatConfirmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatConfirmModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
