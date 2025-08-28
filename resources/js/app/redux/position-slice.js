import { createSlice } from "@reduxjs/toolkit";

export const positionsSlice = createSlice({
    name: "positions",
    initialState: {
        positions: [],   // list of positions
        position: {}     // single position
    },
    reducers: {
        setPosition: (state, action) => {
            state.position = action.payload;
        },
        setPositions: (state, action) => {
            state.positions = action.payload;
        },
    },
});

export const { setPosition, setPositions } = positionsSlice.actions;
export default positionsSlice.reducer;
