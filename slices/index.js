import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice.js';

export default configureStore({
  reducer: {
    // counter – это свойство будет внутри объекта общего состояния: state.counter
    counter: counterReducer,
  },
});
