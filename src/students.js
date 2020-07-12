import React from 'react';

import Main_menu from './components/main_menu';
import Logo from './components/logo';
import Table from './components/table';
// import Slider2 from './components/slider2'
// import Slider3 from './components/slider3'
// import Content from './components/content'
import Footer from './components/footer'
import './App.css';







class Students extends React.Component {
  render() {
    return (
   
     <div className="container">   
        <div className="students_menu">
            <Logo />
            
            <Main_menu />
            
        </div>
        <div>
          <Table />
        </div>
        <div>
          <p>Интересное</p>
          <div className="studImages">
            <div>
              <img src={require('./images/posv.png')}></img>
              <span><br/>Посвящение в студенты</span>
            </div>
            <div>
            <img src={require('./images/studday.png')}></img>
              <span><br/>День студента</span>
            </div>
            <div>
            <img src={require('./images/lectr.png')}></img>
              <span><br/>Конференция DevOops 2018</span>
            </div>
          </div>
        </div>
       
        <div>
          <Footer />
        </div>
        
    </div>

    );
  }
}

export default Students;
