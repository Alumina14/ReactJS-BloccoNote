import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AggiungiNota from "./components/AggiungiNota";
import ListaNote from "./components/ListaNote";
import Nota from "./components/Nota";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <ul className="navigazione">
              <li>
                <Link to="/">BloccoNote</Link>
              </li>
              <li>
                <Link to="/note">Note</Link>
              </li>
              <li>
                <Link to="/aggiungi">Aggiungi Nota</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path={["/", "/note"]}>
                <ListaNote />
              </Route>
              <Route exact path="/aggiungi">
                <AggiungiNota />
              </Route>
              <Route path="/note/:id">
                <Nota />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
