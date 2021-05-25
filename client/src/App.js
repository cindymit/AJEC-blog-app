import AllPosts from "./screens/AllPosts/AllPosts";
import CreatePost from "./screens/CreatePost/CreatePost";
import { Route, Switch } from "react-router-dom";
import './App.css';
import PostDetails from "./screens/PostDetails/PostDetails"
import EditPost from "./screens/EditPost/EditPost"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AllPosts} />
        <Route path="/posts" component={AllPosts} />
        <Route path="/add-post" component={CreatePost} />
        <Route exact path="/post/:id" component={PostDetails} />
        <Route path="/post/:id/edit" component={EditPost} />

      </Switch>
    </div>
  );
}

export default App;