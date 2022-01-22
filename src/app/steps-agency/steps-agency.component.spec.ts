import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsAgencyComponent } from './steps-agency.component';

describe('StepsAgencyComponent', () => {
  let component: StepsAgencyComponent;
  let fixture: ComponentFixture<StepsAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
