import axios from "axios";

export function create_barangay_information_service(data) {
    try {
        const result = axios.post("/api/barangay_information", data);
        return result;
    } catch (error) {}
}

export function get_barangay_information_service() {
    try {
        const result = axios.get("/api/barangay_information");
        return result;
    } catch (error) {}
}

export async function get_barangay_information_by_id_service(product_code, date) {
    const res = await axios.get(
        "/api/barangay_information/" + product_code + "?date=" + date
    );
    return res;
}

export function delete_barangay_information_service(id) {
    try {
        const result = axios.delete(`/api/barangay_information/${id}`);
        return result;
    } catch (error) {}
}

export function update_barangay_information_service(data) {
    try {
        const result = axios.put(`/api/barangay_information/${data.id}`, data);
        return result;
    } catch (error) {}
}
