import * as BmActionType from './bm-action-types'

//export namespace BmActions {
export function addTest(testData={}) {
    return {
        type: BmActionType.ADD_TEST,
        payload: testData
    }
}
export function removeTest(test) {
    return {
        type: BmActionType.REMOVE_TEST,
        payload: test
    }
}
export function changeTest(newTestData) {
    return {
        type: BmActionType.CHANGE_TEST,
        payload: newTestData
    }
}
export function runTests() {
    return {
        type: BmActionType.RUN_TESTS
    }
}
export function testsComplete(results) {
    return {
        type: BmActionType.TESTS_COMPLETE,
        payload: results
    }
}
//}