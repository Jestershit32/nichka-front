import { configureStore } from "@reduxjs/toolkit"
import { backApi } from "./backApi";
import { myProfileReducer } from "./slices/myProfile";
import { messagesReducer } from "./slices/messages";
import { listSettingsReducer } from "./slices/listSettings"


export const store = configureStore({
    reducer: {
        [backApi.reducerPath]: backApi.reducer,
        myProfile: myProfileReducer,
        messages: messagesReducer,
        listSettings: listSettingsReducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(backApi.middleware)
})
