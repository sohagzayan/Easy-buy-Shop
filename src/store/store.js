import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./API/user";
import { toolsApi } from "./API/tools";
import card from "./slices/cardSlice";
import review from "./slices/reviewSlice";

export const store = configureStore({
  reducer: {
    card: card,
    review: review,
    [userApi.reducerPath]: userApi.reducer,
    [toolsApi.reducerPath]: toolsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(toolsApi.middleware),
});

setupListeners(store.dispatch);
