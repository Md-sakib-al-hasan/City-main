import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{

    }
})

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;