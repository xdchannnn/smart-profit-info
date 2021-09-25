import "../../assets/styles/general.scoped.css";
import "../../assets/styles/my-team.scoped.css";

import { useContext, useState, useEffect, useMemo } from "react";
import useFetch from "../../hooks/useFetch.hook";
import AuthContext from "../../context/auth.context";
import { useTranslation } from "react-i18next";
import Preloader from "../loaders/Preloader";

import info_icon from "../../assets/images/info-icon.svg";
import Skype from "../../assets/images/skype.svg";
import WhatsApp from "../../assets/images/whatsapp.svg";
import Telegram from "../../assets/images/telegram-user.svg";
import { toast } from "react-toastify";

function PaidPartners() {
  const { t } = useTranslation();

  const { token } = useContext(AuthContext);
  const { request, loading, error, clearError } = useFetch();

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await request("/get-paid-partners", "GET", null, {
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
      <div id="PaidPartner" className="tabcontent">
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
              </tr>

              {data.map((row, index) => (
                <Table item={row} t={t} key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function Table({ item, t }) {
  const renderStatus = useMemo(() => {
    if (item) {
      switch (item.status) {
        case 0:
          return <span className="blue_text">SP:</span>;
        case 1:
          return <span className="green_text">FP:</span>;
        case 2:
          return <span className="yellow_text">MP:</span>;
        case 3:
          return <span className="purple_text">F:</span>;
      }
    } else return <p />;
  }, []);

  const renderFullStatus = useMemo(() => {
    if (item) {
      switch (item.status) {
        case 0:
          return <span className="blue_text">Start Profit</span>;
        case 1:
          return <span className="green_text">Fixed Profit</span>;
        case 2:
          return <span className="yellow_text">Maxi Profit</span>;
        case 3:
          return <span className="purple_text">Free</span>;
      }
    } else return <p />;
  }, []);

  return (
    <tr className="child_one">
      <td className="child_row">
        <p>{item && item.full_name}</p>
      </td>
      <td className="child_row">
        <div className="child_content">
          {item && (
            <>
              <p>
                {renderStatus} ID {item && item.id}
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
                      {t("myteam:TOP_DESCRIPTION_STATUS1")}:{" "}
                      <span className="status_text">{renderFullStatus}</span>
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
                        {item && item.team_count}
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
        <p>{item && new Date(item.paid_date * 1000).toLocaleDateString()}</p>
      </td>
    </tr>
  );
}

export default PaidPartners;
