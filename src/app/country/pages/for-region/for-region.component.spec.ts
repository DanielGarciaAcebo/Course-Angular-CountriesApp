import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForRegionComponent } from './for-region.component';

describe('ForRegionComponent', () => {
  let component: ForRegionComponent;
  let fixture: ComponentFixture<ForRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
