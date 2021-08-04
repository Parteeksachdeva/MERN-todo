import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Header from './components/Header/Header'
import Home from "./components/Home/Home"

function App() {

  return (
    <Router>
    <div className="app">
    {/* <Header/> */}
    <Switch>
      <ProtectedRoute restricted={true} component={Signin} path="/signin" exact />
      <ProtectedRoute restricted={true} component={Signup} path="/signup" exact />
      <PrivateRoute component={Home} path="/home" exact />
    </Switch>
    </div>
    </Router>
   );
 }

export default App;
