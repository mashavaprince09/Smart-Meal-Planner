import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateMealPlan } from './generate-meal-plan';

describe('GenerateMealPlan', () => {
  let component: GenerateMealPlan;
  let fixture: ComponentFixture<GenerateMealPlan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateMealPlan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateMealPlan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
