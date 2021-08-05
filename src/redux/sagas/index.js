import { all } from 'redux-saga/effects'
import { itemsSaga, itemsSagaPost } from './itemsSaga'

export default function* rootSaga() {
  yield all([
    itemsSaga(),
    itemsSagaPost(),
  ])
}