import {
    create_resources_service,
    get_resources_service,
    update_resources_service,
} from "../services/resources-service";
import { resourcesSlice } from "./resources-slice";

export function get_resources_thunk() {
    return async function (dispatch, getState) {
        const res = await get_resources_service();
        dispatch(resourcesSlice.actions.setResources(res.data));
    };
}

export function create_resources_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_resources_service(data);
    };
}

export function get_resources_by_id_thunk(id) {
    return async function (dispatch, getState) {
        return "";
    };
}

export function delete_resources_thunk(id) {
    return async function (dispatch, getState) {};
}

export function update_resources_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_resources_service(data);
    };
}

export function update_resourcess_thunk(data) {
    return async function (dispatch, getState) {};
}
