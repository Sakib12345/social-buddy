import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/post/:id">
          <PostDetail></PostDetail>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
