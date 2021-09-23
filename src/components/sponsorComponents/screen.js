import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../assets/styles/sponsor.scoped.css";

import Solution from "../../assets/images/solution.svg";
import PhotoUser from "../../assets/images/photo-user.jpg";
import Skype from "../../assets/images/skype.svg";
import Telegram from "../../assets/images/telegram.svg";
import Email from "../../assets/images/email.svg";
import WhatsApp from "../../assets/images/whatsapp.svg";

import useFetch from "../../hooks/useFetch.hook";
import { toast } from "react-toastify";
import Preloader from "../loaders/Preloader";
import AuthContext from "../../context/auth.context";

export default function Screen() {
  const { t } = useTranslation();
  const { request, loading, error, clearError } = useFetch();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token)
      request("/get-sponsor", "GET", null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        console.log(res);
      });
  }, [token]);

  useEffect(() => {
    if (error) {
      toast(error.message, { type: "error" });
      clearError();
    }
  }, [error]);

  return (
    <>
      {loading && <Preloader />}
      <div className="screen">
        <div className="content">
          <div className="top_block">
            <img src={Solution} alt="solution" />
            <p className="title" style={{ marginBottom: 0 }}>
              {t("sponsor:TOP_TITLE")}
            </p>
          </div>
          <div className="block">
            <div className="img_block">
              <img src={PhotoUser} alt="photo-user" className="img" />
            </div>
            <div className="information">
              <p className="username">Иван Иванов</p>
              <div className="contacts">
                <div className="contact_item">
                  <p className="contact_item_text">
                    {t("sponsor:TOP_DESCRIPTION_SKYPE1")}
                  </p>
                  <div className="contact_input_block">
                    <img src={Skype} alt="skype" width={56} height={56} />
                    <input
                      type="text"
                      className="  contact_input"
                      defaultValue="@sanekk000"
                      readOnly
                    />
                  </div>
                </div>
                <div className="contact_item">
                  <p className="contact_item_text">
                    {t("sponsor:TOP_DESCRIPTION_TELEGRAM1")}
                  </p>
                  <div className="contact_input_block">
                    <img src={Telegram} alt="telegram" width={56} height={56} />
                    <input
                      type="text"
                      className="  contact_input"
                      defaultValue="strannik0004"
                      readOnly
                    />
                  </div>
                </div>
                <div className="contact_item">
                  <p className="contact_item_text">
                    {t("sponsor:TOP_DESCRIPTION_EMAIL1")}
                  </p>
                  <div className="contact_input_block">
                    <img src={Email} alt="email" width={56} height={56} />
                    <input
                      type="text"
                      className="  contact_input"
                      defaultValue="ivanivanov@mail.ru"
                      readOnly
                    />
                  </div>
                </div>
                <div className="contact_item">
                  <p className="contact_item_text">
                    {t("sponsor:TOP_DESCRIPTION_PHONE1")}
                  </p>
                  <div className="contact_input_block">
                    <img src={WhatsApp} alt="whatsapp" width={56} height={56} />
                    <input
                      type="text"
                      className="  contact_input"
                      defaultValue={+380996938560}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
