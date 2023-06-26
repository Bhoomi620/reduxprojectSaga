import { delay, put, takeEvery, takeLatest}  from 'redux-saga/effects'
import { increAction } from '../action/counterAction';

function* incrementAsync()
{

    yield delay(2000);

    yield put(increAction())

}


export function* watchIncrement()
{

    yield  takeLatest('INC_AYNC',incrementAsync)

}