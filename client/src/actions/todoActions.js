import axios from 'axios';
import { GET_TODOS, ADD_TODO, DELETE_TODO, TODOS_LOADING } from './types';

export const getTodos = () => dispatch => {
    axios
        .get('http://localhost:5000/api/items')
        .then(res => 
            dispatch({
                type: GET_TODOS,
                payload: res.data
            })        
        )
}

export const deleteTodo = ( id ) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const addTodo = ( todo ) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const setTodosLoading = () => {
    return {
        type: TODOS_LOADING
    }
}
