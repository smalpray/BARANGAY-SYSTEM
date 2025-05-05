import { configureStore } from "@reduxjs/toolkit";
import appSlice from "@/app/redux/app-slice";
import categoriesSlice  from "../redux/categories-slice";
import activitiesSlice  from "../redux/activity-slice";
import resourcesSlice from "../redux/resources-slice";

const store = configureStore({
    reducer: {
        app: appSlice,
        categories: categoriesSlice,
        activities: activitiesSlice,
        resources: resourcesSlice,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
