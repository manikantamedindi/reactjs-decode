import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";
import commentReducer from "./slices/commentSlice";
import { combineReducers } from "redux";
import productsReducer from "./slices/products.slice"; // Import products reducer

// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  newSubscriber: userReducer,
  newComments: commentReducer,
  products: productsReducer,
});

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer and middleware adjustments
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// Export persistor
export const persistor = persistStore(store);
