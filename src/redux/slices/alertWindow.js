import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    window: {
        open: false,
    }

}
const alertWindowSlice = createSlice({
    name: 'alertWindow',
    initialState,
    reducers: {
        toggleWindow(state) {
            state.window.open = !state.window.open;
        }
    }

})
export const { toggleWindow } = alertWindowSlice.actions;
export const alertWindowReducer = alertWindowSlice.reducer;