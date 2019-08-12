import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

import { connect } from 'react-redux';
import { getTodos } from '../actions/todoActions'
import PropTypes from 'prop-types'

class TodoList extends Component {

    componentDidMount() {
        this.props.getTodos();
    }

    // connect to ADD_TODO 
    handleAddTodo = () => {
        const name = prompt('Enter Todo');
        if ( name ) {
            this.setState(state => ({ 
                todos: [...state.todos, { id: uuid(), name }]
            }));
        };
    }

    // connect to DELETE_TODO 
    handleRemoveTodo = (id) => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id )
        }));
    }

    render() {
        const { todos } = this.props.todo;
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

TodoList.propTypes = {
    getTodos: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired

}

const mapStateToProps = (state) => ({
    todo: state.todo
});

export default connect( mapStateToProps, { getTodos } ) ( TodoList );