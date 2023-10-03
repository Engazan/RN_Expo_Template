import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type tokenType = string | null;
type userType = {
    id: number
    name: string
    email: string
} | null;
type AuthState = {
    token: tokenType
    user: userType
};

const initialState:AuthState = {
    token: null,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state: AuthState, action: PayloadAction<tokenType>) {
            state.token = action.payload;
        },
        setUser(state: AuthState, action: PayloadAction<userType>) {
            state.user = action.payload;
        }
    }
});

export const {setToken, setUser} = authSlice.actions;

export default authSlice.reducer;
