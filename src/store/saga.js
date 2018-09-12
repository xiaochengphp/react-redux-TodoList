import { takeEvery, put } from 'redux-saga/effects';
import { Types } from './action';
import { initListAction } from './action';

function* getInitList() {
    yield put(initListAction(['Redux-sagasagsgasgasgags', 'Redux-saga']))
}

// generator 函数
function* mySaga() {
    yield takeEvery(Types.GET_INIT_LIST, getInitList);
}

export default mySaga;
