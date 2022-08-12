import axios from "axios"

export default {
    getAllUsers: async () => {
        const response = await axios.get('http://localhost:8000/api/users/')
        return response.data
    },
}