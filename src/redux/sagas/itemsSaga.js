import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../services/api';


function getApi() {
  return api.get('/items')
}

function* fetchItems(action) {
   try {
      const items = yield call(getApi);
      yield put({type: 'GET_ITEMS_SUCCESS', items: items.data});
   } catch (e) {
      yield put({type: 'GET_ITEMS_FAILED', message: e.message});
   }
}

function* postItems(action) {
   try {
      const { nome, quantidade } = action.payload;
      const response = yield call(api.post('/addItem', { nome, quantidade }))
      yield put({ type: 'POST_ITEMS_SUCCESS', items: response.data })
   } catch(e) {
      yield put({type: 'POST_ITEMS_FAILED', message: e.message});
   }
}

function* itemsSaga() {
   yield takeEvery('GET_ITEMS_REQUESTED', fetchItems);
}

function* itemsSagaPost() {
   yield takeEvery('POST_ITEMS_REQUESTED', postItems);
}

export {itemsSaga , itemsSagaPost};