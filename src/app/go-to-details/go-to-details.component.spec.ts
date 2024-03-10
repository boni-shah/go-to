import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToDetailsComponent } from './go-to-details.component';

describe('GoToDetailsComponent', () => {
  let component: GoToDetailsComponent;
  let fixture: ComponentFixture<GoToDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoToDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
