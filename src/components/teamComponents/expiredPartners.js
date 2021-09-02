import "../../assets/styles/general.scoped.css";
import "../../assets/styles/my-team.scoped.css";

import { useContext, useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch.hook";
import AuthContext from "../../context/auth.context";

function ExpiredPartners() {
  const { token } = useContext(AuthContext);
  const { request, loading, error } = useFetch();

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await request("/get-out-of-date-partners", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      console.log(result);
      if (result) setData(result.data);
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
                <p>Номер кошелька</p>
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
            <tr className="child_one">
              <td className="child_row">
                <p>Иван Иванов</p>
              </td>
              <td className="child_row">
                <div className="child_content">
                  <p>
                    <span className="yellow_text">MP:</span> ID 56908
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
                      <p className="user_id">ID 56908</p>
                      <div className="user_information">
                        <p className="status_item">
                          Статус:{" "}
                          <span className="status_text">MaxiProfit</span>
                        </p>
                        <p className="sponsor_id">
                          ID спонсора:{" "}
                          <span className="sponsor_text">ID 67890</span>
                        </p>
                        <p className="country_id">
                          Страна: <span className="country_text">Россия</span>
                        </p>
                        <p className="country_id">
                          Л/Команда: <span className="country_text">17</span>
                        </p>
                      </div>
                      <div className="social_media_user">
                        <div className="social_item">
                          <img src="assets/images/skype.svg" />
                          <p className="social_text">@sanekk000</p>
                        </div>
                        <div className="social_item">
                          <img src="assets/images/whatsapp.svg" />
                          <p className="social_text">+380996938560</p>
                        </div>
                        <div className="social_item">
                          <img src="assets/images/telegram-user.svg" />
                          <p className="social_text">strannik0004</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="child_row">
                <input
                  type="text"
                  defaultValue="TMmtUWW5ZvvEzJPiVxFUPdDzLef4…"
                  id="copyInput"
                />
                <button onclick="copyFunction()" className="copy_button">
                  <img src="assets/images/copy-icon-link.svg" />
                </button>
              </td>
              <td className="child_row">
                <p>7</p>
              </td>
              <td className="child_row">
                <p>02.07.2021</p>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpiredPartners;
