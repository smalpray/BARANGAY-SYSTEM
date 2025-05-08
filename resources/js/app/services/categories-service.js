import axios from "axios"

export function create_categories_service(data) {
    try {
        const result = axios.post('/api/categories', data)
        return result
    } catch (error) {

    }
}

export function get_categories_service() {
    try {
        const result = axios.get('/api/categories')
        return result
    } catch (error) {

    }
}

export async function get_categories_by_id_service(id) {
    const res = await axios.get('/api/categories/' + id)
    return res.data
}

export function delete_categories_service(id) {
    try {
        const result = axios.delete(`/api/categories/${id}`)
        return result
    } catch (error) {

    }
}

export function update_categories_service(data) {
    try {
        const result = axios.put(`/api/categories/${data.id}`, data)
        return result
    } catch (error) {

    }
}