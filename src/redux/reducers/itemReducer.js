// redux/reducers/itemReducer.js
import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from '../actions/itemActions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_ITEMS_REQUEST:
          return {
              ...state,
              loading: true,
              error: null,
          };
      case FETCH_ITEMS_SUCCESS:
          return {
              ...state,
              loading: false,
              items: action.payload,
              error: null,
          };
      case FETCH_ITEMS_FAILURE:
          return {
              ...state,
              loading: false,
              items: [],
              error: action.payload,
          };
      default:
          return state;
  }
};

export default itemReducer;