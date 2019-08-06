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

    render() {
        const { todos } = this.state;
        return(
            <Container>
                <Button 
                    color="dark" 
                    style={{ marginBottom: '2rem' }} 
                    onClick={() => { 
                        const name = prompt('Enter Todo');
                        if ( name ) {
                            this.setState(state => ({ 
                                todos: [...state.todos, { id: uuid(), name }]
                            }))
                        }
                    }}
                >
                    Add Item
                </Button>
            </Container>
        )
    }
}

export default TodoList;