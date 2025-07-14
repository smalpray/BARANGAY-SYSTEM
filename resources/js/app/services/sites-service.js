import axios from "axios"

export function create_sites_service(data) {
    try {
        const result = axios.post('/api/sites', data)
        return result
    } catch (error) {

    }
}

export function get_sites_service() {
    try {
        const result = axios.get('/api/sites')
        return result
    } catch (error) {

    }
}

export async function get_sites_by_id_service(id) {
    const res = await axios.get('/api/sites/' + id)
    return res.data
}

export function delete_sites_service(id) {
    try {
        const result = axios.delete(`/api/sites/${id}`)
        return result
    } catch (error) {

    }
}

export function update_sites_service(data) {
    try {
        const result = axios.put(`/api/sites/${data.id}`, data)
        return result
    } catch (error) {

    }
}