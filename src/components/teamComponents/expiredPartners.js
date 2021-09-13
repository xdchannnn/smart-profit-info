import "../../assets/styles/general.scoped.css";
import "../../assets/styles/my-team.scoped.css";
import info_icon from "../../assets/images/info-icon.svg"

import { useContext, useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch.hook";
import AuthContext from "../../context/auth.context";

function ExpiredPartners() {
  const { token } = useContext(AuthContext);
  const { request, loading, error } = useFetch();

  const [data, setData] = useState([{
    name:'1',
    id:'2',
    status:'3',
    sponsor_id:'4',
    country: "5",
    skype:'6',
    telegram:'7',
    phone:'8',
    email:'9',
    team_count:'10',
    pay_date:'11',
    wallet_address:'12'
  },{
    name:'1',
    id:'2',
    status:'3',
    sponsor_id:'4',
    country: "5",
    skype:'6',
    telegram:'7',
    phone:'8',
    email:'9',
    team_count:'10',
    pay_date:'11',
    wallet_address:'12'
  }]);

  const numRows = [];

  if(data.length < 25) {
    for(let i = 0; i < 15-data.length; i++) {
      numRows.push(i)
    }
  }

  useEffect(() => {
    (async () => {
      const result = await request("/get-out-of-date-partners", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      console.log(result);
      //if (result) setData(result.data);
    })();
  }, [request, token]);

  return (
    <div id="ExpirePartner" className="tabcontent">
      <div className="table-responsive">
        <table className="general_table">
          <tbody>
            <tr>
              <td className="main_row">
                <p>Имя и Фамилия</p>
              </td>
              <td className="main_row">
                <p>ID</p>
              </td>
              <td className="main_row">
                <p>Спонсор</p>
              </td>
              <td className="main_row">
                <p>Команда</p>
              </td>
              <td className="main_row">
                <p>Дата оплаты</p>
              </td>
              <td className="main_row">
                <p>Передать запись</p>
              </td>
            </tr>
            {
              data.map((row) =>
                <Table 
                  name={row.name} 
                  id={row.id} 
                  status={row.status}
                  sponsor_id={row.sponsor_id}
                  country={row.country}
                  skype={row.skype}
                  telegram={row.telegram}
                  phone={row.phone}
                  email={row.email}
                  team_count={row.team_count}
                  pay_date={row.pay_date}
                  wallet_address={row.wallet_address}
                />
              )
            }
            {
              numRows.map((num) =>
                <Table />
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Table(props) {
  return(
    <tr className="child_one">
              <td className="child_row">
                <p>{props.name}</p>
              </td>
              <td className="child_row">
                <div className="child_content">
                  <p>
                    <span className="yellow_text">{props.status}:</span> ID {props.id}
                  </p>
                  <div className="popover__wrapper">
                    <a href="#">
                      <p className="popover__title">
                        <img
                          src={info_icon}
                          className="info_popover_icon"
                        />
                      </p>
                    </a>
                    <div className="popover__content">
                      <p className="user_id">ID {props.id}</p>
                      <div className="user_information">
                        <p className="status_item">
                          Статус:{" "}
                          <span className="status_text">{props.status}</span>
                        </p>
                        <p className="country_id">
                          Страна: <span className="country_text">{props.country}</span>
                        </p>
                        <p className="country_id">
                          Л/Команда: <span className="country_text">17</span>
                        </p>
                      </div>
                      <div className="social_media_user">
                        <div className="social_item">
                          <img src="assets/images/skype.svg" />
                          <p className="social_text">{props.skype}</p>
                        </div>
                        <div className="social_item">
                          <img src="assets/images/whatsapp.svg" />
                          <p className="social_text">{props.phone}</p>
                        </div>
                        <div className="social_item">
                          <img src="assets/images/telegram-user.svg" />
                          <p className="social_text">{props.telegram}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="child_row">
              <p className="user_id">ID {props.sponsor_id}</p>
              </td>
              <td className="child_row">
                <p>{props.team_count}</p>
              </td>
              <td className="child_row">
                <p>{props.pay_date}</p>
              </td>
              <td className="child_row">
                <input
                  type="text"
                  defaultValue="Заменить"
                  id="copygreenInput"
                  className="copy_input"
                  readOnly
                />
                <button onclick="copygreenFunction()" className="copy_green">
                  <img src="assets/images/green-copy.svg" />
                </button>
              </td>
            </tr>
  )
}

export default ExpiredPartners;
