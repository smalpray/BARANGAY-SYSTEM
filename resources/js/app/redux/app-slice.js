import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        user: {},
        sidebarOpen:false
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
         setSidebarOpen: (state, action) => {
            state.sidebarOpen = action.payload;
        },
    },
});
export const { setUser,setSidebarOpen } =
    appSlice.actions;

export default appSlice.reducer;
