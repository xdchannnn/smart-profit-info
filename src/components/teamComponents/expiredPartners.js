import "../../assets/styles/general.scoped.css";
import "../../assets/styles/my-team.scoped.css";
import { useTranslation } from "react-i18next";

import { useContext, useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch.hook";
import AuthContext from "../../context/auth.context";

import info_icon from "../../assets/images/info-icon.svg";
import Skype from "../../assets/images/skype.svg";
import WhatsApp from "../../assets/images/whatsapp.svg";
import Telegram from "../../assets/images/telegram-user.svg";
import Copy from "../../assets/images/green-copy.svg";
import Preloader from "../loaders/Preloader";
import { toast } from "react-toastify";

function ExpiredPartners() {
  const { t } = useTranslation();

  const { token } = useContext(AuthContext);
  const { request, loading, error, clearError } = useFetch();

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await request("/get-out-of-date-partners", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      console.log(result);
      if (result) {
        if (result.data.length < 25) {
          Array(25 - result.data.length)
            .fill()
            .map((item) => result.data.push(item));
          setData(result.data);
        } else setData(result.data);
      }
    })();
  }, [request, token]);

  useEffect(() => {
    if (error) {
      toast(error.message, { type: "error" });
      clearError();
    }
  }, [error]);

  return (
    <>
      {loading && <Preloader />}
      <div id="ExpirePartner" className="tabcontent">
        <div className="table-responsive">
          <table className="general_table">
            <tbody>
              <tr>
                <td className="main_row">
                  <p>{t("myteam:TOP_DESCRIPTION_NAMEANDSURNAME1")}</p>
                </td>
                <td className="main_row">
                  <p>ID</p>
                </td>
                <td className="main_row">
                  <p>{t("myteam:TOP_DESCRIPTION_SPONSOR1")}</p>
                </td>
                <td className="main_row">
                  <p>{t("myteam:TOP_DESCRIPTION_TEAM1")}</p>
                </td>
                <td className="main_row">
                  <p>{t("myteam:TOP_DESCRIPTION_DATEOFPAYMENT")}</p>
                </td>
                <td className="main_row">
                  <p>{t("myteam:TOP_DESCRIPTION_TRANSFERPLACE")}</p>
                </td>
              </tr>
              {Array(20)
                .fill()
                .map((row, index) => (
                  <Table item={row} key={index} t={t} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function Table({ item, t }) {
  return (
    <tr className="child_one">
      <td className="child_row">
        <p>{item && item.name}</p>
      </td>
      <td className="child_row">
        <div className="child_content">
          {item && (
            <>
              <p>
                <span className="yellow_text">{item && item.status}:</span> ID{" "}
                {item && item.id}
              </p>
              <div className="popover__wrapper">
                <a href="#">
                  <p className="popover__title">
                    <img src={info_icon} className="info_popover_icon" />
                  </p>
                </a>
                <div className="popover__content">
                  <p className="user_id">ID {item && item.id}</p>
                  <div className="user_information">
                    <p className="status_item">
                      {t("myteam:TOP_DESCRIPTION_SPONSOR1")}:{" "}
                      <span className="status_text">{item && item.status}</span>
                    </p>
                    <p className="country_id">
                      {t("myteam:TOP_DESCRIPTION_COUNTRY1")}:{" "}
                      <span className="country_text">
                        {item && item.country}
                      </span>
                    </p>
                    <p className="country_id">
                      {t("myteam:TOP_DESCRIPTION_L/COMAND")}:{" "}
                      <span className="country_text">
                        {item && item.country_id}
                      </span>
                    </p>
                  </div>
                  <div className="social_media_user">
                    <div className="social_item">
                      <img src={Skype} alt="skype" />
                      <p className="social_text">{item && item.skype}</p>
                    </div>
                    <div className="social_item">
                      <img src={WhatsApp} alt="whatsapp" />
                      <p className="social_text">{item && item.phone}</p>
                    </div>
                    <div className="social_item">
                      <img src={Telegram} alt="telegram" />
                      <p className="social_text">{item && item.telegram}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </td>
      <td className="child_row">
        <p className="user_id">{item && `ID ${item.sponsor_id}`}</p>
      </td>
      <td className="child_row">
        <p>{item && item.team_count}</p>
      </td>
      <td className="child_row">
        <p>{item && item.pay_date}</p>
      </td>
      <td className="child_row">
        {item && (
          <>
            <input
              type="text"
              defaultValue={t("myteam:TOP_DESCRIPTION_REPLACE")}
              id="copygreenInput"
              className="copy_input"
              readOnly
            />
            <button onclick="copygreenFunction()" className="copy_green">
              <img src={Copy} alt="copy" />
            </button>
          </>
        )}
      </td>
    </tr>
  );
}

export default ExpiredPartners;
