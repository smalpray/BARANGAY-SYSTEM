import { configureStore } from "@reduxjs/toolkit";
import appSlice from "@/app/redux/app-slice";
import  accountSlice from "../redux/account-slice";
import  barangayResidentSlice  from "../redux/barangay-resident-slice";
import inventoriesSlice from "../redux/inventories-slice";
import  positionsSlice  from "../redux/position-slice";


const store = configureStore({
    reducer: {
        app: appSlice,
        accounts:accountSlice,
        barangay_residents:barangayResidentSlice,
        inventories:inventoriesSlice,
        positions:positionsSlice,
     
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
