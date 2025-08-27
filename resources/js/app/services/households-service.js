

import axios from "axios";

export function create_households_service(data) {
    try {
        const result = axios.post("/api/households", data);
        return result;
    } catch (error) {}
}

export function get_households_service() {
    try {
        const result = axios.get("/api/households");
        return result;
    } catch (error) {}
}

export async function get_households_by_id_service(product_code, date) {
    const res = await axios.get(
        "/api/households/" + product_code + "?date=" + date
    );
    return res;
}

export function delete_households_service(id) {
    try {
        const result = axios.delete(`/api/households/${id}`);
        return result;
    } catch (error) {}
}

export function update_households_service(data) {
    try {
        const result = axios.put(`/api/households/${data.id}`, data);
        return result;
    } catch (error) {}
}

