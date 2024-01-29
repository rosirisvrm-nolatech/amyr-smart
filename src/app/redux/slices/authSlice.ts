import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '@/app/types';

const initialState: AuthState = {
    user: null,
    token: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, { payload: { user, token }}: PayloadAction<AuthState>) => {
            state.user = user;
            state.token = token;
        }
    }
})

export const { 
    setAuth,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
