import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecUpdateOrderComponent } from './spec-update-order.component';

describe('SpecUpdateOrderComponent', () => {
  let component: SpecUpdateOrderComponent;
  let fixture: ComponentFixture<SpecUpdateOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecUpdateOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecUpdateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
