import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanderCompteAgencierComponent } from './demander-compte-agencier.component';

describe('DemanderCompteAgencierComponent', () => {
  let component: DemanderCompteAgencierComponent;
  let fixture: ComponentFixture<DemanderCompteAgencierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemanderCompteAgencierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemanderCompteAgencierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
