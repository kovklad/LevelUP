import React from "react";

class Table extends React.Component {
  render() {
    return(
        <div className="table">
            <p><b>Студентам</b></p>
                <table>
                        <tr>
                            <th>Мое расписание</th>
                            <th>Мои события</th>
                            <th colSpan="2" width="100px">ОКТЯБРЬ</th>
                        </tr>
                        <tr>
                            <td>Занятие</td>
                            <td>Дата</td> 
                            <td>Время</td>
                            <td>Место</td>
                        </tr>
                        <tr>
                            <td>Тех.англ</td>
                            <td>16.10.18</td> 
                            <td>15:40</td>
                            <td>302 А</td>
                        </tr>
                        <tr>
                            <td>Тех.англ</td>
                            <td>16.10.18</td> 
                            <td>15:40</td>
                            <td>302 А</td>
                        </tr>
                        <tr>
                            <td>Тех.англ</td>
                            <td>16.10.18</td> 
                            <td>15:40</td>
                            <td>302 А</td>
                        </tr>
                        <tr>
                            <td>Тех.англ</td>
                            <td>16.10.18</td> 
                            <td>15:40</td>
                            <td>302 А</td>
                        </tr>
                        <tr>
                            <td>Тех.англ</td>
                            <td>16.10.18</td> 
                            <td>15:40</td>
                            <td>302 А</td>
                        </tr>
                </table>
        </div>
    );
  }
}


export default Table;