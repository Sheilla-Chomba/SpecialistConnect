import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecSettingsComponent } from './spec-settings.component';

describe('SpecSettingsComponent', () => {
  let component: SpecSettingsComponent;
  let fixture: ComponentFixture<SpecSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
