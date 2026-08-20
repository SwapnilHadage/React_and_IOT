import { configureStore, } from "@reduxjs/toolkit"
import formReducer from './slice'

const store = configureStore({
  reducer: {
    setup : formReducer,
  },
  devTools : true,
});

export default store;