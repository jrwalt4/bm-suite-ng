import { TestBed, async } from '@angular/core/testing';

import {Store} from '@ngrx/store'

import { AppComponent } from './app.component';
import { BmListComponent } from './bm-list/bm-list.component'
import { BmResultsComponent } from './bm-results/bm-results.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BmResultsComponent,
        BmListComponent
      ],
      providers:[
        {
          provide:Store,
          useValue:{
            select(s:string){}
          }
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
