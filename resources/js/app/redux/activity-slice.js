import { createSlice } from "@reduxjs/toolkit";

export const activitiesSlice = createSlice({
    name: "activities",
    initialState: {
        activity: {},
        activities:[]
    },
    reducers: {
        setActivity: (state, action) => {
            state.activity = action.payload;
        },
         setActivities: (state, action) => {
            state.activities = action.payload;
        },
    },
});
export const { setActivity,setActivities } =
    activitiesSlice.actions;

export default activitiesSlice.reducer;
