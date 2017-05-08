import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store'

import { Subject } from 'rxjs'

import { BmResultsComponent } from './bm-results.component';

describe('BmResultsComponent', () => {
  let component: BmResultsComponent;
  let fixture: ComponentFixture<BmResultsComponent>;

  beforeEach(async(() => {
    let s = new Subject;
    TestBed.configureTestingModule({
      declarations: [BmResultsComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            select(store: string) {

            }
          }
        }
      ]
    }).compileComponents();
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
