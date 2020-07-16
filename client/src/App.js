import React, { Fragment, useEffect } from "react";
import "./App.scss";
import "./Global.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import pages
import { Routes } from "./pages/Routing";
import MenuNavbar from "./components/NavBar";

const App = () => {
  useEffect(() => {}, []);
  return (
    <Router>
      <Fragment>
        <MenuNavbar />
        <Switch>
          <section
            className="container-fluid"
            style={{
              backgroundColor: "#2b303a",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <Route component={Routes}></Route>
          </section>
        </Switch>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Created and Designed By</strong> @JashanKhela 😊
            </p>
          </div>
        </footer>
      </Fragment>
    </Router>
  );
};

export default App;
