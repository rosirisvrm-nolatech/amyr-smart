import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { mapApi } from "./services/mapApi";
import { alertsApi } from "./services/alertsApi";
import { oilApi } from "./services/oilApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [mapApi.reducerPath, alertsApi.reducerPath, oilApi.reducerPath],
}

const rootReducer = combineReducers({
    auth: authReducer,
    [mapApi.reducerPath]: mapApi.reducer,
    [alertsApi.reducerPath]: alertsApi.reducer,
    [oilApi.reducerPath]: oilApi.reducer,
})

const persistReducers = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistReducers,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(mapApi.middleware, alertsApi.middleware, oilApi.middleware),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch