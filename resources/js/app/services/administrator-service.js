import axios from "axios";

export function create_administrator_service(data) {
    try {
        const result = axios.post("/api/administrator", data);
        return result;
    } catch (error) {}
}

export function get_administrator_service() {
    try {
        const result = axios.get("/api/administrator");
        return result;
    } catch (error) {}
}

export async function get_administrator_by_id_service(product_code, date) {
    const res = await axios.get(
        "/api/administrator/" + product_code + "?date=" + date
    );
    return res;
}

export function delete_administrator_service(id) {
    try {
        const result = axios.delete(`/api/administrator/${id}`);
        return result;
    } catch (error) {}
}

export function update_administrator_service(data) {
    try {
        const result = axios.put(`/api/administrator/${data.id}`, data);
        return result;
    } catch (error) {}
}
