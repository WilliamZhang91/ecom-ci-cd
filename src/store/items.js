import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
    }, 
    reducers: {
        addItemToCart(state, action) {;
            const existingItem = state.items.find(item => item.id === action.payload.id);
            state.totalQuantity++
            if(!existingItem) {
                state.items.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    price: action.payload.price,
                    image: action.payload.image,
                    quantity: 1,
                });
            } else {
                existingItem.quantity ++;
            }
        }, 
        removeItemFromCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload.id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        removeFromCart (state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.totalQuantity = state.totalQuantity - existingItem.quantity
            state.totalAmount = existingItem.quantity * existingItem.price
        } 
    }
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice;