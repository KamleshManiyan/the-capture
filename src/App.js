import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUS from "./pages/AboutUS";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Switch, Route, useLocation } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
// Animation
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div className="app">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUS />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route>
            <MovieDetails path="/work/:id" />
          </Route>
          <Route>
            <ContactUs path="/contact" exact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
