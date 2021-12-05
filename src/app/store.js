import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import reducers from '../reducers'

// export const store = configureStore(reducers);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
