import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slice";

const reducers = combineReducers({
  root: rootReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
