import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store'

import { Observable } from 'rxjs'

import { BmStore } from '../reducers/bm-reducer'

@Component({
  selector: 'bm-list',
  templateUrl: './bm-list.component.html',
  styleUrls: ['./bm-list.component.css']
})
export class BmListComponent implements OnInit {

  benchmarks$: Observable<{}[]>

  constructor(private _store: Store<BmStore>) {
    this.benchmarks$ = _store.select('bms');
  }

  ngOnInit() {
  }

}
