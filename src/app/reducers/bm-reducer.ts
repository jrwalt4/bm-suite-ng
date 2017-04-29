import * as BmActions from './bm-actions'
import {BmActionType} from './bm-action-types'

let initialState = {
  tests:[],
  isRunning:false,
  results:[]
}

export function bm_reducer(state = initialState, action:any) {
  if(action) {
    switch(action.type) {
      case BmActionType.ADD_TEST: {
        let newTest = action.payload;
        let newTestArray = state.tests.concat(newTest);
        return Object.assign({},state, {tests:newTestArray})
      }
      case BmActionType.REMOVE_TEST: {
        let newTestArray = state.tests.filter((test)=>{
          return !compareTests(test, action.payload);
        });
        return Object.assign({}, state, {tests:newTestArray})
      }
      case BmActionType.CHANGE_TEST: {
        let newTestArray = state.tests.map((test)=>{
          return compareTests(test, action.payload)? action.payload : test;
        });
        return Object.assign({}, state, {tests:newTestArray})
      }
      case BmActionType.RUN_TESTS:{
        return Object.assign({},state, {
          isRunning:true,
          results:[]
        })
      }
      case BmActionType.TESTS_COMPLETE: {
        let results = action.payload;
        return Object.assign({}, state, {
          isRunning:false,
          results
        })
      }
    }
  }
  return state;
}

function compareTests(test1, test2):boolean {
  return test1 == test2
}

export interface BmStore {
  bms:{}[]
  results:{}[]
  isRunning:boolean
}