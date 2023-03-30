import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    description: "",
    oneTag: "",
    tags: [],
    errors: []
}
const createAndUpdatePostSlice = createSlice({
    name: 'createAndUpdate',
    initialState,
    reducers: {
        setTitleValue(state, action) {
            state.title = action.payload.title
        },
        setDescriptionValue(state, action) {
            state.description = action.payload.description
        },
        setOneTagValue(state, action) {
            state.oneTag = action.payload.oneTag
        },
        addTag(state) {
            if (state.oneTag) {
                state.tags.push(state.oneTag)
                state.oneTag = ""
            }
        },
        addAllTags(state, action) {
            state.tags = action.payload.tags
        },
        removeTag(state, action) {
            state.tags.splice(action.payload.indexTag, 1)
        },
        setError(state, action) {
            state.errors = action.payload.errors
        }
    }
})
export const { setTitleValue, setDescriptionValue, setOneTagValue, addTag, removeTag, addAllTags, setError } = createAndUpdatePostSlice.actions;
export const createAndUpdatePostReducer = createAndUpdatePostSlice.reducer;