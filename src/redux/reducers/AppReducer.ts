import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import LANGS from "@Translations/Languages";

type AppState = {
    language: typeof LANGS[keyof typeof LANGS]
};

const initialState:AppState = {
    language: 'en',
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLanguage(state: AppState, action: PayloadAction<AppState['language']>) {
            state.language = action.payload;
        }
    }
});

export const {setLanguage} = appSlice.actions;

export default appSlice.reducer;
