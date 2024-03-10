import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPanelsComponent } from './featured-panels.component';

describe('FeaturedPanelsComponent', () => {
  let component: FeaturedPanelsComponent;
  let fixture: ComponentFixture<FeaturedPanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedPanelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
