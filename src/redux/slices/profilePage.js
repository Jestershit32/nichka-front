import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoritOrCreated: "created"
}
const profilePageSlice = createSlice({
    name: 'profilePage',
    initialState,
    reducers: {
        setTab(state, action) {
            state.favoritOrCreated = action.payload.favoritOrCreated;
        }
    }
})
export const { setTab } = profilePageSlice.actions;
export const profilePageReducer = profilePageSlice.reducer;