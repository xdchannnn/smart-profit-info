import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../assets/styles/dashboard.scoped.css";
import "../../assets/styles/general.scoped.css";

import InfoIcon from "../../assets/images/info-icon.svg";
import Skype from "../../assets/images/skype.svg";
import WhatsApp from "../../assets/images/whatsapp.svg";
import Telegram from "../../assets/images/telegram-user.svg";
import CopyIcon from "../../assets/images/copy-icon-link.svg";

import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch.hook";
import { useContext } from "react";
import AuthContext from "../../context/auth.context";
import Preloader from "../loaders/Preloader";
import { toast } from "react-toastify";

function Tabcontent() {
  const { t } = useTranslation();
  const { token, loading } = useContext(AuthContext);
  const fetch = useFetch();

  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch
      .request(`/get-level-info/${id || 1}`, "GET", null, {
        Authorization: `Bearer ${token}`,
      })
      .then((res) => {
        console.log(res);
        if (res.data.length < 25) {
          Array(25 - res.data.length)
            .fill()
            .map((item) => res.data.push(item));
          setData(res.data);
        } else setData(res.data);
      });
  }, [id]);

  useEffect(() => {
    if (fetch.error) {
      toast(fetch.error.message, { type: "error" });
      fetch.clearError();
    }
  }, [fetch.error]);

  return (
    <>
      {(loading || fetch.loading) && <Preloader />}
      <div id="LevelOne" className="tabcontent">
        <div className="table-responsive">
          <table className="general_table">
            <tbody>
              <tr>
                <td className="main_row">
                  <p>{t("generalteam:TOP_DESCRIPTION_NAMEANDSURNAME")}</p>
                </td>
                <td className="main_row">
                  <p>ID</p>
                </td>
                <td className="main_row">
                  <p>{t("generalteam:TOP_DESCRIPTION_SPONSORTEAM")}</p>
                </td>
                <td className="main_row">
                  <p>{t("generalteam:TOP_DESCRIPTION_TEAM2")}</p>
                </td>
                <td className="main_row">
                  <p>{t("generalteam:TOP_DESCRIPTION_DATEOFPAYMENT")}</p>
                </td>
              </tr>
              {data.map((item, index) => (
                <TableItem item={item} t={t} key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const TableItem = ({ item, t }) => {
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
  }, [item]);

  const renderFullStatus = useMemo(() => {
    if (item) {
      switch (item.status) {
        case 0:
          return <span className="blue_text">START PROFIT</span>;
        case 1:
          return <span className="green_text">FIXED PROFIT</span>;
        case 2:
          return <span className="yellow_text">MAXI PROFIT</span>;
        case 3:
          return <span className="purple_text">FREE</span>;
      }
    } else return <p />;
  }, [item]);

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
                {renderStatus} ID {item.id}
              </p>
              <div className="popover__wrapper">
                <a href="#">
                  <p className="popover__title">
                    <img
                      src={InfoIcon}
                      alt="info-icon"
                      className="info_popover_icon"
                    />
                  </p>
                </a>
                <div className="popover__content">
                  <p className="user_id">ID {item.id}</p>
                  <div className="user_information">
                    <p className="status_item">
                      {t("generalteam:TOP_DESCRIPTION_STATUSPOPUP")}{" "}
                      {renderFullStatus}
                    </p>

                    <p className="country_id">
                      {t("generalteam:TOP_DESCRIPTION_COUNTRY2")}{" "}
                      <span className="country_text">{item.country}</span>
                    </p>
                    <p className="country_id">
                      {t("generalteam:TOP_DESCRIPTION_LCOMMAND")}{" "}
                      <span className="country_text">{item.team_count}</span>
                    </p>
                  </div>
                  <div className="social_media_user">
                    <div className="social_item">
                      <img src={Skype} alt="skype" />
                      <p className="social_text">{item.skype}</p>
                    </div>
                    <div className="social_item">
                      <img src={WhatsApp} alt="whatsapp" />
                      <p className="social_text">{item.phone}</p>
                    </div>
                    <div className="social_item">
                      <img src={Telegram} alt="telegram" />
                      <p className="social_text">{item.telegram}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </td>
      <td className="child_row">{item && <p>ID: {item.sponsor_id}</p>}</td>
      <td className="child_row">{item && <p>{item.team_count}</p>}</td>
      <td className="child_row">
        {item && (
          <p
            style={{
              color:
                Date.now() > item.next_payment_date * 1000 ? "red" : "white",
            }}
          >
            {new Date(item.next_payment_date * 1000).toLocaleDateString()}
          </p>
        )}
      </td>
    </tr>
  );
};

export default Tabcontent;
