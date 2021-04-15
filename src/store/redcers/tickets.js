import { getResponse, getError } from '../../helper';

const initialState = {
  searchId: '',
  tickets: [],
  stop: false,
  error: false,
  loading: true,
};

export default function reducer(state = initialState, action) {
  const response = getResponse(action);
  const error = getError(action);
  switch (action.type) {
    case 'GET_ID':
      return { ...state, loading: true };
    case 'GET_ID_SUCCESS':
      return {
        ...state,
        searchId: response.searchId,
        loading: false,
        error: false,
      };
    case 'GET_ID_FAIL':
      return { ...state, error: error, loading: false };
    case 'GET_TICKETS':
      return { ...state, loading: true };
    case 'GET_TICKETS_SUCCESS':
      return { ...state, tickets: response.tickets, stop: true };
    case 'GET_TICKETS_FAIL':
      return { ...state, error: error, loading: false };
    default:
      return state;
  }
}
