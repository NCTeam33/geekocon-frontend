import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneManagementComponent } from './zone-management.component';

describe('ContributorsComponent', () => {
  let component: ZoneManagementComponent;
  let fixture: ComponentFixture<ZoneManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
