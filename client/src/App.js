import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import AppNavbar from './components/AppNavbar';
import TodoList from './components/TodoList';
import TodoModal from './components/TodoModal';

import { Container } from 'reactstrap'


class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <div className="App">
                    <AppNavbar />
                    <Container>
                        <TodoModal />
                        <TodoList />
                    </Container>
                </div>
            </Provider>
        );
    }
}

export default App;
