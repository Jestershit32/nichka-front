import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [],
}
const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage(state, action) {
            state.messages.push({
                messuge: action.payload.message,
                status: action.payload.status
            })
        },
        removeMessage(state, action) {
            state.messages.splice(action.payload.id, 1);
        }
    }
})
export const { addMessage, removeMessage } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;