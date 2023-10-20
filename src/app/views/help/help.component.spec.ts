import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpComponent } from './help.component';

describe('HelpCOMPComponent', () => {
  let component: HelpComponent;
  let fixture: ComponentFixture<HelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpComponent]
    });
    fixture = TestBed.createComponent(HelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
