import { createSlice } from "@reduxjs/toolkit";

export const ticketsSlice = createSlice({
    name: "tickets",
    initialState: {
        ticket: {},
        tickets: [],
    },
    reducers: {
        setTicket: (state, action) => {
            state.ticket = action.payload;
        },
        setTickets: (state, action) => {
            console.log('action.payload',action.payload)
            state.tickets = action.payload;
        },
    },
});
export const { setTicket, setTickets } = ticketsSlice.actions;

export default ticketsSlice.reducer;
