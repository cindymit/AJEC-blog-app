import AllPosts from "./screens/AllPosts/AllPosts";
import CreatePost from "./screens/CreatePost/CreatePost";
import { Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AllPosts} />
        <Route path="/posts" component={AllPosts} />
        <Route path="/add-post" component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;