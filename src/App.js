import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUS from "./pages/AboutUS";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Nav />
      <Switch>
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
    </div>
  );
}

export default App;
