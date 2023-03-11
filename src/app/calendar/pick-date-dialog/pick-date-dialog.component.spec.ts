import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickDateDialogComponent } from './pick-date-dialog.component';

describe('PickDateDialogComponent', () => {
  let component: PickDateDialogComponent;
  let fixture: ComponentFixture<PickDateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickDateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickDateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
