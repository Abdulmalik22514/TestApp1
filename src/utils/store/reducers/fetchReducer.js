import {FETCHING_DATA, FETCHING_DATA_SUCCESS} from '../types';

const initialState = {
  isFetching: false,
  data: [],
};

export default function fetchingReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
      };

    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: [...state.data, ...action.payload],
      };

    default:
      return state;
  }
}
