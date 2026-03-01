import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice.js";
import { phoneApi } from "./services/phone.js";
import { productApi } from "./services/product.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [phoneApi.reducerPath]: phoneApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(phoneApi.middleware)
      .concat(productApi.middleware),
});
