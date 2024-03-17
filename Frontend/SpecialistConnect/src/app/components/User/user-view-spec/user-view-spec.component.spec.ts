import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewSpecComponent } from './user-view-spec.component';

describe('UserViewSpecComponent', () => {
  let component: UserViewSpecComponent;
  let fixture: ComponentFixture<UserViewSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserViewSpecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserViewSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
