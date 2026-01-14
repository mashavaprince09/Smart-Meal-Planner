import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByIngredients } from './find-by-ingredients';

describe('FindByIngredients', () => {
  let component: FindByIngredients;
  let fixture: ComponentFixture<FindByIngredients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindByIngredients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindByIngredients);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
