import { createSlice } from "@reduxjs/toolkit";

export const resourcesSlice = createSlice({
    name: "app",
    initialState: {
        resource: {},
        resources: [],
    },
    reducers: {
        setResource: (state, action) => {
            state.resource = action.payload;
        },
        setResources: (state, action) => {
            console.log('action.payload',action.payload)
            state.resources = action.payload;
        },
    },
});
export const { setResource, setResources } = resourcesSlice.actions;

export default resourcesSlice.reducer;
