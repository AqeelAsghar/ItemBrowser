// redux/actions/itemActions.js
import { getItems } from '../../services/api';

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const fetchItems = () => async (dispatch) => {
    dispatch({ type: FETCH_ITEMS_REQUEST });
    try {
        const items = await getItems();
        dispatch({ type: FETCH_ITEMS_SUCCESS, payload: items });
    } catch (error) {
        dispatch({ type: FETCH_ITEMS_FAILURE, payload: error.message });
    }
};