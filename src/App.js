import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CategorySelector from './components/CategorySelector';
import PageCountSelector from './components/PageCountSelector';
import BookList from './components/BookList';
import bookReducer from './features/bookSlice';
import './App.css';

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Book-For-Me: Book Recommender</h1>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={CategorySelector} />
              <Route path="/page-count" component={PageCountSelector} />
              <Route path="/suggestions" component={BookList} />
            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;