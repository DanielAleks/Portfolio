import React from 'react';
import './App.css';
import Main from './components';
import './components/style.sass'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Technologies from './components/technologies/Technologies';
import Projects from './components/new-projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/tech">Technologies</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/tech">
            <Technologies />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
// <Main />

export default App;
