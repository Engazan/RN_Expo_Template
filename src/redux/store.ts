import {combineReducers, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger'
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

/* reducers */
const reducers = combineReducers({
    auth: authReducer,
})

/* persist config */
const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
}

/* apply persist config */
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }).concat([logger, thunk]),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
