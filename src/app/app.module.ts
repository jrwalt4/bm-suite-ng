import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {StoreModule} from '@ngrx/store'

import { AppComponent } from './app.component';
import { BmListComponent } from './bm-list/bm-list.component';
import { BmResultsComponent } from './bm-results/bm-results.component';

import {bm_reducer} from './reducers/bm-reducer'

@NgModule({
  declarations: [
    AppComponent,
    BmListComponent,
    BmResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(bm_reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
