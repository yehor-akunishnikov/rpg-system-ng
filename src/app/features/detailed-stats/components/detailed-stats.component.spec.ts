import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedStatsComponent } from './detailed-stats.component';

describe('DetailedStatsComponent', () => {
  let component: DetailedStatsComponent;
  let fixture: ComponentFixture<DetailedStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedStatsComponent]
    });
    fixture = TestBed.createComponent(DetailedStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
