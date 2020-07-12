import React from 'react';

import Main_menu from './components/main_menu';
import Logo from './components/logo';
import Slider1 from './components/slider1'
import Slider2 from './components/slider2'
import Slider3 from './components/slider3'
import Content from './components/content'
import Footer from './components/footer'
import './App.css';







class Index1 extends React.Component {
  render() {
    return (
   
     <div className="container">   
        <div className="container_menu">
            <Logo />
            
            <Main_menu />
            
        </div>
        <div className="slider">
          <Slider1 />
          <Slider2 />
          <Slider3 />
        </div>
        <div className="content">
          <Content />
        </div>
        <div>
          <Footer />
        </div>
        
    </div>

    );
  }
}

export default Index1;
