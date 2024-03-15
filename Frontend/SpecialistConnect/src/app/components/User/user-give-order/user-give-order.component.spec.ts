import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGiveOrderComponent } from './user-give-order.component';

describe('UserGiveOrderComponent', () => {
  let component: UserGiveOrderComponent;
  let fixture: ComponentFixture<UserGiveOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGiveOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserGiveOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
