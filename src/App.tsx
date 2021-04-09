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
import './navbar.sass'
import Home from './components/home/Home';


function App() {
  return (
    <Router>
      <div >
        <nav className='nav-container'>
          <Link className='nav-item' to="/">Home</Link>
          <Link className='nav-item' to="/about">About</Link>
          <Link className='nav-item' to="/projects">Projects</Link>
          <Link className='nav-item' to="/tech">Technologies</Link>
          <Link className='nav-item' to="/contact">Contact</Link>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
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
