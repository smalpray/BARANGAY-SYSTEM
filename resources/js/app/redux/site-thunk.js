import { create_sites_service, get_sites_by_id_service, get_sites_service, update_sites_service } from "../services/sites-service";
import { sitesSlice } from "./site-slice";


export function get_sites_thunk() {
    return async function (dispatch, getState) {
        const res = await get_sites_service()
        dispatch(sitesSlice.actions.setSites(res.data));
    };
}


export function create_sites_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_sites_service(data)
    };
}

export function get_sites_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_sites_by_id_service(id)
        dispatch(sitesSlice.actions.setSite(res));
    };
}


export function delete_sites_thunk(id) {
    return async function (dispatch, getState) {
    };
}


export function update_sites_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_sites_service(data)
    };
}

export function update_sitess_thunk(data) {
    return async function (dispatch, getState) {
    };
}