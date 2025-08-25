import axios from "axios";

export function create_inventories_service(data) {
    try {
        const result = axios.post("/api/inventories", data);
        return result;
    } catch (error) {}
}

export function get_inventories_service() {
    try {
        const result = axios.get("/api/inventories");
        return result;
    } catch (error) {}
}

export async function get_inventories_by_id_service(product_code, date) {
    const res = await axios.get(
        "/api/inventories/" + product_code + "?date=" + date
    );
    return res;
}

export function delete_inventories_service(id) {
    try {
        const result = axios.delete(`/api/inventories/${id}`);
        return result;
    } catch (error) {}
}

export function update_inventories_service(data) {
    try {
        const result = axios.put(`/api/inventories/${data.id}`, data);
        return result;
    } catch (error) {}
}
