import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import counterReducer from "./redux/counterSlice";
import userReducer from "./redux/userSlice";
import commentReducer from "./redux/commentSlice";
import { combineReducers } from "redux";

// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  newSubscriber: userReducer,
  newComments: commentReducer,
});

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Export persistor
export const persistor = persistStore(store);
