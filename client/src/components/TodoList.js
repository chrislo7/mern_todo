import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class TodoList extends Component {
    state = {
        // hardcoded, change later
        todos: [
            { id: uuid(), name: "Learn Redux" },
            { id: uuid(), name: "Buy groceries" },
            { id: uuid(), name: "Go to gym" },
            { id: uuid(), name: "Have fun" }
        ]
    }

    handleAddTodo = () => {
        const name = prompt('Enter Todo');
        if ( name ) {
            this.setState(state => ({ 
                todos: [...state.todos, { id: uuid(), name }]
            }));
        };
    }

    handleRemoveTodo = (id) => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id )
        }));
    }

    render() {
        const { todos } = this.state;
        return(
            <Container>
                <Button 
                    color="dark" 
                    style={{ marginBottom: '2rem' }} 
                    onClick= { this.handleAddTodo }
                >
                    Add Todo
                </Button>
                <ListGroup>
                    <TransitionGroup className='todo-list'>
                        {todos.map(({ id, name }) => (
                            <CSSTransition key={ id } timeout={ 500 } classNames="fade">
                                <ListGroupItem>
                                    <Button 
                                        className='remove-btn'
                                        color='danger'
                                        size='sm'
                                        onClick={() => this.handleRemoveTodo(id) }
                                    >
                                        X
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default TodoList;