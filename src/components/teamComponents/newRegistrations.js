import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../assets/styles/general.scoped.css";
import "../../assets/styles/my-team.scoped.css";
import AuthContext from "../../context/auth.context";

import useFetch from "../../hooks/useFetch.hook";

import InfoIcon from "../../assets/images/info-icon.svg";
import Skype from "../../assets/images/skype.svg";
import WhatsApp from "../../assets/images/whatsapp.svg";
import Telegram from "../../assets/images/telegram-user.svg";
import Preloader from "../loaders/Preloader";
import { toast } from "react-toastify";

function NewRegistrations() {
  const { t } = useTranslation();

  const { token } = useContext(AuthContext);
  const { request, loading, error, clearError } = useFetch();

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await request("/get-new-partners", "GET", null, {
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
      <div id="NewRegister" className="tabcontent">
        <div className="table-responsive">
          <table className="general_table">
            <tbody>
              <tr>
                <td className="main_row">
                  <p>{t("myteam:TOP_DESCRIPTION_NAMEANDSURNAME1")}</p>
                </td>
                <td className="main_row">
                  <p>{t("myteam:TOP_DESCRIPTION_ID1")}</p>
                </td>
                <td className="main_row">
                  <p>{t("myteam:TOP_DESCRIPTION_EMAIL2")}</p>
                </td>
                <td className="main_row">
                  <p>{t("myteam:TOP_DESCRIPTION_PHONE1")}</p>
                </td>
                <td className="main_row">
                  <p>{t("myteam:TOP_DESCRIPTION_REGISTRATIONDATE")}</p>
                </td>
              </tr>
              {data.map((item, index) => (
                <TableItem item={item} key={index} t={t} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const TableItem = ({ item, t }) => {
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
                <span className="free_status">FP:</span> ID {item && item.id}
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
                  <p className="user_id">ID {item && item.id}</p>
                  <div className="user_information">
                    <p className="status_item">
                      {t("myteam:TOP_DESCRIPTION_STATUS1")}:{" "}
                      <span className="status_text_free">
                        {item && item.status}
                      </span>
                    </p>
                    <p className="sponsor_id">
                      {t("myteam:TOP_DESCRIPTION_SPONSOR1")}:{" "}
                      <span className="sponsor_text">
                        ID {item && item.sponsor_id}
                      </span>
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
                      <img src={WhatsApp} alt="whatsApp" />
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
        <p>{item && item.email}</p>
      </td>
      <td className="child_row">
        <p>{item && item.phone}</p>
      </td>
      <td className="child_row">
        <p className="register_text">{item && item.register_date}</p>
      </td>
    </tr>
  );
};

export default NewRegistrations;
