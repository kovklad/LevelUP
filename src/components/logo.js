import React from "react";
import { Router, Route, Switch, Link } from 'react-router-dom'


class Logo extends React.Component {
  render() {
    return(
        <div className="logo">
            <Link to="/"><p>North IT University</p></Link>
            <button>Начать обучение</button>
        </div>
    );
  }
}


export default Logo;