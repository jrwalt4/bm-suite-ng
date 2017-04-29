import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmResultsComponent } from './bm-results.component';

describe('BmResultsComponent', () => {
  let component: BmResultsComponent;
  let fixture: ComponentFixture<BmResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
