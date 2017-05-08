import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {Store} from '@ngrx/store'

import { BmListComponent } from './bm-list.component';

describe('BmListComponent', () => {
  let component: BmListComponent;
  let fixture: ComponentFixture<BmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmListComponent ],
      providers:[
        {
          provide:Store,
          useValue:{
            select(store:string) {

            }
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
