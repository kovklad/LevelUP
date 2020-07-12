import React from "react";
import { Router, Route, Switch, Link } from 'react-router-dom'


class Main_menu extends React.Component {
  render() {
    return(
        <div className="menu">
            
                    <ul className="menu_ul">
                    <li>
                        <a href="http://ya.ru">Абитуриентам</a>
                        </li>
                    <li>
                            <Link to="/students">Студентам</Link>
                        </li>
                    <li>
                        <a href="">факультеты</a>
                        </li>
                    <li>
                        <a href="">Наука</a>
                        </li>
                    <li>
                            <Link to="/LifeStyle">LifeStyle</Link>
                        </li>
                    <li>
                        <a href="">Преподаватели</a>
                        </li>
                    <li>
                        <a href="">О нас</a>
                
                        </li>
        </ul>
    
</div>
    );
  }
}


export default Main_menu;