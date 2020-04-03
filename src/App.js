import React from 'react';
import BlogsList from './components/BlogsList';
import BlogPost from './components/BlogPost';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={BlogsList} />
        <Route path='/posts/:user_post?' component={BlogPost} />
      </Router>
    </div>
  );
}

export default App;
