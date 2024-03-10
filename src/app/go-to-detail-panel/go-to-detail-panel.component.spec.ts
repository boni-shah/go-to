import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToDetailPanelComponent } from './go-to-detail-panel.component';

describe('GoToDetailPanelComponent', () => {
  let component: GoToDetailPanelComponent;
  let fixture: ComponentFixture<GoToDetailPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoToDetailPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToDetailPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
