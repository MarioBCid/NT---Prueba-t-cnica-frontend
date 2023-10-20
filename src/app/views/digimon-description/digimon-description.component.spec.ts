import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonDescriptionComponent } from './digimon-description.component';

describe('DigimonDescriptionComponent', () => {
  let component: DigimonDescriptionComponent;
  let fixture: ComponentFixture<DigimonDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigimonDescriptionComponent]
    });
    fixture = TestBed.createComponent(DigimonDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
