import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store'

import {Observable} from 'rxjs'

import {BmStore} from '../reducers/bm-reducer'

@Component({
  selector: 'bm-results',
  templateUrl: './bm-results.component.html',
  styleUrls: ['./bm-results.component.css']
})
export class BmResultsComponent implements OnInit {

  results$:Observable<{}[]>

  constructor(private _store:Store<BmStore>) {
    this.results$ = _store.select('results');
  }

  ngOnInit() {
  }

}
