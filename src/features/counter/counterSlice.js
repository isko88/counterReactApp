import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "count",
    initialState: {
        value: 0
    },
    reducers: {
        artir: (state, actions) => {
            state.value++;
        },
        azalt: (state) => {
            state.value--;
        }
    }
})

export const { artir, azalt } = counterSlice.actions;
export const getCount = (state) => state.count.value
export default counterSlice.reducer;