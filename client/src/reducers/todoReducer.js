import uuid from 'uuid';
import { GET_TODOS, ADD_TODO, DELETE_TODO } from '../actions/types';

// hardcoded todos
const initialState = {
    todos: [
        { id: uuid(), name: "Learn Redux" },
        { id: uuid(), name: "Buy groceries" },
        { id: uuid(), name: "Go to gym" },
        { id: uuid(), name: "Have fun" },
        { id: uuid(), name: "Eat food" }
    ]
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GET_TODOS':
            return {...state};
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload )
            }
        case 'ADD_TODO':
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        default:
            return state;
    }
}