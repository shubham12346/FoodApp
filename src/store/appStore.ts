import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice.service";

const AppStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default AppStore;

export type RootState = ReturnType<typeof AppStore.getState>;
export type AppDispatch = typeof AppStore.dispatch;
