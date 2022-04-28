import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogZoneTypeComponent } from './dialog-zone-type.component';

describe('DialogZoneTypeComponent', () => {
  let component: DialogZoneTypeComponent;
  let fixture: ComponentFixture<DialogZoneTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogZoneTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogZoneTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
