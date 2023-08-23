import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  cartSlice,
  cart: cartReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  //middleware: [thunk],  devTools: process.env.NODE_ENV !== 'production',
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// ( ( ( (  persister setting is here  ) ) ) )
export const persister = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./slice/cartSlice";

// export const store = configureStore({
//   reducer: {
//     cartSlice,
//   },
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
