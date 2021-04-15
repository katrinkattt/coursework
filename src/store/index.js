import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import rootReducer from './redcers';

const middlewareConfig = {
  interceptors: {
    response: [
      {
        error(store, error) {
          if (error.response === undefined) {
            console.error('Ошибка соединения с сервером');
            return Promise.reject(error);
          } else {
            console.warn(error.response.data.message);
          }
          return Promise.reject(error);
        },
      },
    ],
  },
};

export default function configureStore(initialState, client) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, axiosMiddleware(client, middlewareConfig)),
  );
}
