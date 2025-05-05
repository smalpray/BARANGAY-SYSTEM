import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name: "app",
    initialState: {
        category: {},
        categories: [],
    },
    reducers: {
        category: (state, action) => {
            state.category = action.payload;
        },
        setCategories: (state, action) => {
            console.log('action.payload',action.payload)
            state.categories = action.payload;
        },
    },
});
export const { category, setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
