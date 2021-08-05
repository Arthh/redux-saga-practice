import * as type from '../types';

const initialState = {
  items: [],
  loading: false,
  error: null,
}

export default function items(state = initialState, action ) {
  switch (action.type) {
    case type.GET_ITEMS_REQUESTED:
      return {
        ...state,
        loading: true,
      }

    case type.GET_ITEMS_SUCCESS: 
      return {
        ...state,
        loading: false,
        items: action.items,
      }

      case type.GET_ITEMS_FAILED: 
        return {
          ...state,
          loading: false,
          error: action.message,
        }

      case type.POST_ITEMS_REQUESTED:
        return {
          ...state,
          loading: true,
        }

      case type.POST_ITEMS_SUCCESS: 
        return {
          ...state,
          loading: false,
          items: action.items,
        }

      case type.POST_ITEMS_FAILED: 
        return {
          ...state,
          loading: false,
          error: action.message,
        }

    default:
      return state;
  }
}