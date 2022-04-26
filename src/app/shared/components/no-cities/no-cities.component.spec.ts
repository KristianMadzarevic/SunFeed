import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCitiesComponent } from './no-cities.component';

describe('NoCitiesComponent', () => {
  let component: NoCitiesComponent;
  let fixture: ComponentFixture<NoCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoCitiesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
