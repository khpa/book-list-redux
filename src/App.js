import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import BookList from './container/book-list';


const store = createStore(rootReducer);



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <h1>Book List App - react-redux </h1>
        <BookList />
      </div>
      </Provider>
    );
  }
}

export default App;
