import { get_positions_by_id_service, get_positions_service } from "../services/positions-service";
import { setPositions, setPosition } from "./position-slice";

export function get_positions_thunk() {
    return async function (dispatch) {
        const res = await get_positions_service();
        // if res.data is an array
        dispatch(setPositions(res.data));

        // if res.data has .data inside (e.g. { data: [...] }), then do this:
        // dispatch(setPositions(res.data.data));
    };
}

export function get_positions_by_id_thunk(id) {
    return async function (dispatch) {
        const res = await get_positions_by_id_service(id);
        dispatch(setPosition(res.data));
    };
}
