import {Action, combineReducers, configureStore, Middleware} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import authReducer from '@Redux/reducers/AuthReducer';
import appReducer from "@Redux/reducers/AppReducer";

/* reducers */
const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
})

/* root */
const rootReducer = (state: any, action: any) => {
    if (action.type === 'USER_LOGOUT') {
        return reducers(undefined, action)
    }

    return reducers(state, action)
}

/* persist config */
const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
}

/* apply persist config */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/* universal logout */
const apiResponseMiddleware: Middleware = (storeAPI) => (next) => (action) => {
    // Check if this action is for a fulfilled API call
    // @ts-ignore
    if (action.type.endsWith('/rejected')) {
        // @ts-ignore
        const responseStatus = action.payload?.status;

        if (responseStatus === 401) {
            // Dispatch the logout action
            storeAPI.dispatch({ type: 'USER_LOGOUT' });
        }
    }

    return next(action);
};

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }).concat([apiResponseMiddleware]),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
