import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name: "app",
    initialState: {
        category: {},
        categories: [],
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setCategories: (state, action) => {
            console.log('action.payload',action.payload)
            state.categories = action.payload;
        },
    },
});
export const { setCategory, setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
