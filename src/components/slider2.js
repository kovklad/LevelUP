import React from "react";

class Slider2 extends React.Component {
  render() {
    return(
      <div className="slider2">
       <a href=""><img src={require('../images/webdev.jpg')}></img></a>
       <a href=""><img src={require('../images/jadev.jpg')}></img></a>
       <a href=""><img src={require('../images/datas.jpg')}></img></a>
       <a href=""><img src={require('../images/uxdis.jpg')}></img></a>
       <a href=""><img src={require('../images/bchain.jpg')}></img></a>
      </div>
    );
  }
}


export default Slider2;