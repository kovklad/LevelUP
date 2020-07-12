import React from "react";
import Students from './students';
import LifeStyle from './LifeStyle';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index1 from "./index1";

function Routertest() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Index1} />
        <Route path="/students" component={Students} />
        <Route path="/LifeStyle" component={LifeStyle} />
      </div>
    </Router>
  );
}



export default Routertest;