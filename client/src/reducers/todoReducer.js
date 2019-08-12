import uuid from 'uuid';
import { GET_TODOS, ADD_TODOS, DELETE_TODOS } from '../actions/types';

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
        default:
            return state;
    }
}