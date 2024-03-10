import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSnapshotComponent } from './list-snapshot.component';

describe('ListSnapshotComponent', () => {
  let component: ListSnapshotComponent;
  let fixture: ComponentFixture<ListSnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSnapshotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
