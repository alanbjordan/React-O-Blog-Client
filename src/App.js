import React from 'react';
import BlogsList from './components/BlogsList';
import BlogPost from './components/BlogPost';
import BlogsComment from './components/BlogComment';
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
        <Route exact path='/posts/:user_post?' component={BlogPost} />
        <Route path='/posts/comments/:user_comment?' component={BlogsComment}/>
      </Router>
    </div>
  );
}

export default App;
