import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    logoutWindow: {
        open: false,
    }

}
const myProfileSlice = createSlice({
    name: 'myProfile',
    initialState,
    reducers: {
        updateUser(state, action) {
            state.user = action.payload
        },
        login(state, action) {
            state.user = action.payload
            localStorage.setItem("token", action.payload.token)
        },
        logout(state) {
            state.user = {}
            localStorage.removeItem("token");
        },
        toggleOpenWindow(state) {
            state.logoutWindow.open = !state.logoutWindow.open;
        }
    }

})
export const { login, logout, updateUser, toggleOpenWindow } = myProfileSlice.actions;
export const myProfileReducer = myProfileSlice.reducer;