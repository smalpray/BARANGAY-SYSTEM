import axios from "axios"

export function create_resources_service(data) {
    try {
        const result = axios.post('/api/resources', data)
        return result
    } catch (error) {

    }
}

export function get_resources_service() {
    try {
        const result = axios.get('/api/resources')
        return result
    } catch (error) {

    }
}

// export async function get_resources_by_id_service(id) {
//     const res = await axios.get('/api/resources/' + id)
//     return res.data
// }

export function delete_resources_service(id) {
    try {
        const result = axios.delete(`/api/resources/${id}`)
        return result
    } catch (error) {

    }
}

export function update_resources_service(data) {
    try {
        const result = axios.put(`/api/resources/${data.id}`, data)
        return result
    } catch (error) {

    }
}