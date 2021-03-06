import {put,takeLatest,all} from 'redux-saga/effects';

function * fetchMovies(){
  const json =yield fetch('')
  .then((res) => res.json())
  yield put ({type:'MOVIES_LIST', json:json, })
}

function * fetchLatesh(){
  const json = yield fetch('')
      .then((res) => res.json())
      yield put({type:'Latest_LIST',json:json})
}

function * actionWatcher(){
  yield takeLatest('GET_MOVIES', fetchMovies)
}

function * actionWatcherLatest(){
  yield takeLatest('GET_Latest_MOVIES',fetchLatest)
}

export default function * rootSaga(){
  yield all([
    actionWatcher(),
    actionWatcherLatest()
  ]);
}
