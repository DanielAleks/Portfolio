import React, { useEffect, useState } from 'react';
import './App.css';
import './components/style.sass'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Technologies from './components/technologies/Technologies';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import AnotherWay from './components/contact/another-way/AnotherWay';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function App() {
  const size = useWindowSize()
  const [isNav, setIsNav] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    size.width <= 900 ? setIsNav(false) : setIsNav(true)
  }, [size.width])

  return (
    <Router>
      <div>
        <Navbar
          isAnimated={isAnimated}
          setIsAnimated={setIsAnimated}
          setIsNav={setIsNav}
          isNav={isNav} size={size}
        />

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
          <Route path="/another-way">
            <AnotherWay />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
// <Main />

export default App;
