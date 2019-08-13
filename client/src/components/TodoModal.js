import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions'
import uuid from 'uuid';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class TodoModal extends Component {
    // having a form input in this component's state
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            // reminder to take out uuid after connecting with database/server
            id: uuid(),
            name: this.state.name
        }

        // add todo via addTodo action
        this.props.addTodo(newTodo);
        // close the modal
        this.toggle();
    }
    
    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >
                    Add Todo 
                </Button>
                <Modal
                    isOpen={ this.state.modal }
                    toggle={ this.toggle }
                >
                    <ModalHeader toggle={ this.toggle }>Add to Todo List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={ this.onSubmit }>
                            <FormGroup>
                                <Label for='todo'>Todo</Label>
                                <Input
                                    type='text'
                                    name='name'
                                    id='todo'
                                    placeholder='add todo item'
                                    onChange={ this.onChange }
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >
                                    Add Todo
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => ({
    todo: state.todo
});

export default connect( mapStateToProps, { addTodo } )( TodoModal );