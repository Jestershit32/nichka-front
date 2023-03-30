import { configureStore } from "@reduxjs/toolkit"
import { backApi } from "./backApi";
import { alertWindowReducer } from "./slices/alertWindow";
import { messagesReducer } from "./slices/messages";
import { listSettingsReducer } from "./slices/listSettings"
import { createAndUpdatePostReducer } from "./slices/createAndUpdatePost";
import { profilePageReducer } from "./slices/profilePage"


export const store = configureStore({
    reducer: {
        [backApi.reducerPath]: backApi.reducer,
        alertWindow: alertWindowReducer,
        messages: messagesReducer,
        listSettings: listSettingsReducer,
        profilePage: profilePageReducer,
        createAndUpdate: createAndUpdatePostReducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(backApi.middleware)
})
