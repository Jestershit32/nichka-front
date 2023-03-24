import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: "",
    newOrOld: "new",
    page: 1,
    inOnePage: 10
}
const listSettingsSlice = createSlice({
    name: 'listSettings',
    initialState,
    reducers: {
        setSortBy(state, action) {
            state.newOrOld = action.payload.sortBy
            state.page = 1
        },
        setPage(state, action) {
            state.page = action.payload.page
        },
        setInOnePage(state, action) {
            state.inOnePage = action.payload.inOnePage
            state.page = 1
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload.searchValue
            state.page = 1
        }
    }
})
export const { setSortBy, setPage, setInOnePage, setSearchValue } = listSettingsSlice.actions;
export const listSettingsReducer = listSettingsSlice.reducer;