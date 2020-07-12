import React from 'react';

import Main_menu from './components/main_menu';
import Logo from './components/logo';
import Footer from './components/footer'
import './App.css';







class LifeStyle extends React.Component {
  render() {
    return (
   
     <div className="containerLS">   
        <div className="LifeS_menu">
            <div className="LifeStyle_menu">
                <Logo />
                <Main_menu />
            </div>
            <h1>LifeStyle нашего университета</h1>
            <p>это наши студенты, преподаватели, события и все, что связано с новыми технологиями</p>
        </div>
        <div className="LifeStyle_content">
            <div className="studimgLS">
                <img src={require('./images/studLife.png')}></img>
            </div> 
            <div className="studtxtLS">
                <h3>Студенты</h3>
                <p>У нас учатся самые Целеустремленные и неумолимые!
                    Победители всевозможных олимпиад, конкурсов и 
                    хакантов. Таких как: Imagine Cup, Rise Business Plan
                    Competition, University Startup World Cup, Eurasia
                    Mobile Challenge и многих других. Как думаете в 
                    компании таких людей у вас получится стоять на месте?
                    Мы знаем - конечно - нет!
                </p>
            </div>
            <div className="teachtxtLS">
                <h3>Преподаватели</h3>
                <p>Наши преподаватели еще круче, чем наши студенты!
                    Каждый преподаватель - признанный эксперт в своей
                    области и талантливый педагог. Их опыт и знания
                    подтверждены престижными международными 
                    сертефикатами, профессиональными наградами и 
                    тысячами восторженных отзывов слушателей.
                </p>
                <p>В своей работе они опираются на проверенную 
                    временем методику интенсивной подготовки широкого
                    круга слушателей. Они успешно сочитают тренерскую
                    работу с оказанием консалтинговых услуг, работой в
                    крупнейших российских и зарубежных компаниях.
                </p>
                <p>Благодаря этому учебные программы постоянно
                    дополняются реальными практическими примерами, 
                    что делает каждый курс действительно актуальным.
                </p>
            </div>
            <div className="teachimgLS">
                <img src={require('./images/lectLife.png')}></img>
            </div> 
            <div className="eventimgLS">
                <img src={require('./images/eventLife.png')}></img>
            </div> 
            <div className="eventtxtLS">
                <h3>События</h3>
                <p>Развиваем SoftSkills: открыт набор на курс по успешной 
                    самопрезентации!
                </p>
                <p>С помощью невербальных средств общения - мимики,
                    жестов, телодвижений - передается от 60% до 80% 
                    информации. Наш курс даст Вам возможность заново 
                    осознать свои коммуникационные возможности и 
                    приумножить их.
                </p>
            </div>
            
        </div>
        <div className='divLSbutton'>
        <button id='LSbutton'>Начать обучение</button>
        </div>
        <div>
          <Footer />
        </div>
        
    </div>

    );
  }
}

export default LifeStyle;
