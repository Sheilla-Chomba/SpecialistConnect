import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecOrdersComponent } from './spec-orders.component';

describe('SpecOrdersComponent', () => {
  let component: SpecOrdersComponent;
  let fixture: ComponentFixture<SpecOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
