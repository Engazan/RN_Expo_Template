import {combineReducers, configureStore} from '@reduxjs/toolkit';
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
import thunk from 'redux-thunk'
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

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }).concat([thunk]),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
