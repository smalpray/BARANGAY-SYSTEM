import axios from "axios";

export function create_activities_service(data) {
    try {
        const result = axios.post("/api/activities", data);
        return result;
    } catch (error) {}
}

export function get_activities_service() {
    try {
        const result = axios.get("/api/activities");
        return result;
    } catch (error) {}
}

export async function get_activities_by_id_service(product_code, date) {
    const res = await axios.get(
        "/api/activities/" + product_code + "?date=" + date
    );
    return res;
}

export function delete_activities_service(id) {
    try {
        const result = axios.delete(`/api/activities/${id}`);
        return result;
    } catch (error) {}
}

export function update_activities_service(data) {
    try {
        const result = axios.put(`/api/activities/${data.id}`, data);
        return result;
    } catch (error) {}
}
