import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantCouleurComponent } from './composant-couleur.component';

describe('ComposantCouleurComponent', () => {
  let component: ComposantCouleurComponent;
  let fixture: ComponentFixture<ComposantCouleurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComposantCouleurComponent]
    });
    fixture = TestBed.createComponent(ComposantCouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
