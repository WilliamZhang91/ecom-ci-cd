import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./items";
import interfaceSlice from "./interface";

const store = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        interface: interfaceSlice.reducer,
    }
})

export default store;
