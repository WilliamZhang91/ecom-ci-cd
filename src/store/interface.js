import { createSlice } from "@reduxjs/toolkit";

const interfaceSlice = createSlice({
    name: "interface",
    initialState: { showCart: false },
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        },
    }
});

export const interfaceActions = interfaceSlice.actions;

export default interfaceSlice;