import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Development from "./Components/Development/Development";
import Footer from "./Components/Footer/Footer";
import Headers from "./Components/Headers/Headers";
import Home from "./Components/Home/Home";
import "./index.css";

import Courses from "./Components/Courses/Courses";
import Software from "./Components/Software/Software";
import Design from "./Components/Design/Design";
import About from "./Components/About/About";

import DetailsCourse from "./Components/DetailsCourse/DetailsCourse";
import NotFound from "./Components/NotFound/NotFound";
function App() {
  return (
    <div>
      <Router>
        <Headers></Headers>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/software">
            <Software></Software>
          </Route>
          <Route path="/design">
            <Design></Design>
          </Route>
          <Route path="/development">
            <Development></Development>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/details">
            <DetailsCourse></DetailsCourse>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
