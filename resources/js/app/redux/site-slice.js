import { createSlice } from "@reduxjs/toolkit";

export const sitesSlice = createSlice({
    name: "sites",
    initialState: {
        site: {},
        sites: [],
    },
    reducers: {
        setSite: (state, action) => {
            state.site = action.payload;
        },
        setSites: (state, action) => {
            console.log('action.payload',action.payload)
            state.sites = action.payload;
        },
    },
});
export const { setSite, setSites } = sitesSlice.actions;

export default sitesSlice.reducer;
