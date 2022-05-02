import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Movies from "./components/Movies";

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Go Watch a Movie!</h1>
          <hr className="mb-3"></hr>
        </div>
        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Manage Catalogue</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-10">
            {/* Similar with Switch Statement and its ORDER is matter if we don't include "exact" in Route component! */}
            <Switch>
              <Route path="/movies/:id">
                <Movie />
              </Route>
              <Route path="/movies">
                <Movies />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Movie() {
  let { id } = useParams();

  return <h2>Movie id: {id}</h2>;
}