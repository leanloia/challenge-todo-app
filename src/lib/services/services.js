import axios from 'axios';

class AxiosRequests {
    constructor() {
        this.axiosBaseRoute = axios.create({
            // baseURL: process.env.REACT_APP_API_URI,
            baseURL: 'http://localhost:4000/api/v1',
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
              credentials: 'same-origin',
        })
    };

    getAllToDos() {
        return this.axiosBaseRoute.get('/todos', {})
        .then(({data}) => data);
    }

    getToDo(id) {
        return this.axiosBaseRoute.get(`/todos/${id}`, {})
        .then(({data})=> data)
    }

    createToDo(title) {
        return this.axiosBaseRoute.post('/todos', {title})
        .then(({data}) => data)
    }

    updateToDo(id, title) {
        return this.axiosBaseRoute.put(`/todos/${id}`, {title})
        .then(({data}) => data)
    }

    deleteToDo(id) {
        return this.axiosBaseRoute.delete(`/todos/${id}`, {})
        .then(({data}) => data)
    }


}


const axiosRequestMethods = new AxiosRequests();
export default axiosRequestMethods;