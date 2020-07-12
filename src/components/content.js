import React from "react";

class Content extends React.Component {
  render() {
    return(
        <div className="content">
            <h2 className="news">Наши последние новости</h2>
            <div className="content_container">
                <div className="content_img">
                    <img src={require('../images/news.jpg')} />
                </div>
                <div className="content_text">
                    <h3 className="textcont">Обучение в Европе,
                    Азии и Латинской Америке: успей 
                    подать заявку на конкурс академической мобильности
                    до 24 сентября
                    </h3>
                    <h4 className="textcont2">Студенты North IT University начиная со второго курса бакалавриата могут
                    приобрести опыт обучения за рубежом.
                    Сегодня мы предлагаем три основные опции: краткосрочные
                    поездки (семинары,конференции,летние школы), программы
                    семестрового обмена и магистерские программы двойного 
                    диплома. Список наших постоянных партнеров постоянно
                    пополняется.
                    В этом году прием заявок на внутренний конкурс по академической
                    мобильности продлится до 24 сентября.
                    </h4>  
                    <button className="knopka3"><b>Больше новостей</b></button>
                </div>
            </div>
       </div>
    );
  }
}


export default Content;