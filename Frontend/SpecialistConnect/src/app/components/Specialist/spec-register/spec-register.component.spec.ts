import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecRegisterComponent } from './spec-register.component';

describe('SpecRegisterComponent', () => {
  let component: SpecRegisterComponent;
  let fixture: ComponentFixture<SpecRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
