import axios from 'axios';

export default {
    fetchPizzas: async () => {
        let response = await axios.get('http://localhost:8000/api/pizzas');
        return response.data;
    }
}