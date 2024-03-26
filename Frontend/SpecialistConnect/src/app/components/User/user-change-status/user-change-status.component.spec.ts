import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChangeStatusComponent } from './user-change-status.component';

describe('UserChangeStatusComponent', () => {
  let component: UserChangeStatusComponent;
  let fixture: ComponentFixture<UserChangeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserChangeStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserChangeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
