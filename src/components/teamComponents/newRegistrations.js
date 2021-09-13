import { useContext, useEffect, useState } from "react";
import "../../assets/styles/general.scoped.css";
import "../../assets/styles/my-team.scoped.css";
import AuthContext from "../../context/auth.context";

import useFetch from "../../hooks/useFetch.hook";

function NewRegistrations() {
  const { token } = useContext(AuthContext);
  const { request, loading, error } = useFetch();

  const [data, setData] = useState([]);

  const numRows = [];

  if(data.length < 15) {
    for(let i = 0; i < 15-data.length; i++) {
      numRows.push(i)
    }
  }

  useEffect(() => {
    (async () => {
      const result = await request("/get-new-partners", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      console.log(result);
      if (result) setData(result.data);
    })();
  }, [request, token]);

  return (
    <div id="NewRegister" className="tabcontent">
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
              <p>Email</p>
            </td>
            <td className="main_row">
              <p>Телефон</p>
            </td>
            <td className="main_row">
              <p>Дата регистрации</p>
            </td>
          </tr>
          {data.map((item, index) => (
            <TableItem item={item} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const TableItem = ({ item }) => {
  return (
    <tr className="child_one">
      <td className="child_row">
        <p>{item.name}</p>
      </td>
      <td className="child_row">
        <div className="child_content">
          <p>
            <span className="free_status">FP:</span> ID {item.id}
          </p>
          <div className="popover__wrapper">
            <a href="#">
              <p className="popover__title">
                <img
                  src="assets/images/info-icon.svg"
                  className="info_popover_icon"
                />
              </p>
            </a>
            <div className="popover__content">
              <p className="user_id">ID {item.id}</p>
              <div className="user_information">
                <p className="status_item">
                  Статус:{" "}
                  <span className="status_text_free">{item.status}</span>
                </p>
                <p className="sponsor_id">
                  ID спонсора:{" "}
                  <span className="sponsor_text">ID {item.sponsor_id}</span>
                </p>
                <p className="country_id">
                  Страна: <span className="country_text">{item.country}</span>
                </p>
                <p className="country_id">
                  Л/Команда:{" "}
                  <span className="country_text">{item.team_count}</span>
                </p>
              </div>
              <div className="social_media_user">
                <div className="social_item">
                  <img src="assets/images/skype.svg" />
                  <p className="social_text">{item.skype}</p>
                </div>
                <div className="social_item">
                  <img src="assets/images/whatsapp.svg" />
                  <p className="social_text">{item.phone}</p>
                </div>
                <div className="social_item">
                  <img src="assets/images/telegram-user.svg" />
                  <p className="social_text">{item.telegram}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="child_row">
        <p>{item.email}</p>
      </td>
      <td className="child_row">
        <p>{item.phone}</p>
      </td>
      <td className="child_row">
        <p className="register_text">{item.register_date}</p>
      </td>
    </tr>
  );
};

export default NewRegistrations;
