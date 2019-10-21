import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getTodos, deleteTodo } from '../actions/todoActions';
import PropTypes from 'prop-types';

class TodoList extends Component {

    componentDidMount() {
        this.props.getTodos();
    }

    handleRemoveTodo = (id) => {
        this.props.deleteTodo(id);
    }

    render() {
        const { todos } = this.props.todo;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className='todo-list'>
                        {todos.map(({ _id, name }) => (
                            <CSSTransition key={ _id } timeout={ 500 } classNames="fade">
                                <ListGroupItem className='hoverzoom'>
                                    <Button 
                                        outline
                                        className='remove-btn'
                                        color='danger'
                                        size='sm'
                                        onClick={this.handleRemoveTodo.bind(this, _id) }
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

export default connect( mapStateToProps, { getTodos, deleteTodo } ) ( TodoList );