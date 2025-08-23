import axios from "axios"

export function get_account_by_department_service(data) {
    try {
        const result = axios.get('/api/get_account_by_department?'+ new URLSearchParams(data).toString())
        return result
    } catch (error) {

    }
}

export function create_positions_service(data) {
    try {
        const result = axios.post('/api/positions', data)
        return result
    } catch (error) {

    }
}



export function get_positions_service() {
    try {
        const queryString = window.location.search;
        const hasQuery = queryString.includes("?");
        const separator = hasQuery ? "&" : "?";
        const ticketing_location = window.location.pathname.split('/')[3] == "carcar"?"Carcar":"San Carlos";

        const result = axios.get(`/api/positions${queryString}${separator}location=${ticketing_location}`);
        return result;
    } catch (error) {
        console.error("Failed to fetch positions:", error);
        throw error; // optional: rethrow for error handling upstream
    }
}


export async function get_positions_by_id_service(id) {
    const res = await axios.get('/api/positions/' + id)
    return res.data
}

export function delete_positions_service(id) {
    try {
        const result = axios.delete(`/api/positions/${id}`)
        return result
    } catch (error) {

    }
}

export function update_positions_service(data) {
    try {
        const result = axios.put(`/api/positions/${data.id}`, data)
        return result
    } catch (error) {

    }
}