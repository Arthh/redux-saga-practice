import * as type from '../types';

export function getItems() {
  return {
    type: type.GET_ITEMS_REQUESTED,
  }
}

export function postItems(item) {
  return {
    type: type.POST_ITEMS_REQUESTED,
    payload: item
  }
}