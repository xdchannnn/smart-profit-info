import { useContext, useEffect, useState } from "react";
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
  const [loadingAvatar, setLoadingAvatar] = useState(false);
  const { token } = useContext(AuthContext);

  const [sponsor, setSponsor] = useState({});
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    if (sponsor && token) {
      setLoadingAvatar(true);
      fetch(sponsor.photo, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => res.blob())
        .then((res) => {
          setAvatar(res);
          setLoadingAvatar(false);
        })
        .catch(() => setLoadingAvatar(false));
    }
  }, [sponsor, token]);

  useEffect(() => {
    if (token)
      request("/get-sponsor", "GET", null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        if (res) setSponsor(res.data);
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
      {(loading || loadingAvatar) && <Preloader />}
      <div className="screen">
        <div className="content">
          <div className="top_block">
            <img src={Solution} alt="solution" />
            <p className="title" style={{ marginBottom: 0 }}>
              {t("sponsor:TOP_TITLE")}
            </p>
          </div>
          <div
            className={`block ${(() => {
              switch (sponsor.status) {
                case "Free":
                  return "block-purple";
                case "Start Profit":
                  return "block-blue";
                case "Fixed Profit":
                  return "block-green";
                case "Maxi Profit":
                  return "block-yellow";
                default:
                  return "block-purple";
              }
            })()}`}
          >
            <div className="img_block">
              <img
                src={avatar && URL.createObjectURL(avatar)}
                alt="photo-user"
                className="img"
              />
            </div>
            <div className="information">
              <p className="username">{sponsor.full_name}</p>
              <div className="contacts">
                <div className="contact_item">
                  <p className="contact_item_text">
                    {t("sponsor:TOP_DESCRIPTION_SKYPE1")}
                  </p>
                  <div className="contact_input_block">
                    <img src={Skype} alt="skype" width={56} height={56} />
                    <input
                      type="text"
                      className="contact_input"
                      value={sponsor.skype}
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
                      value={sponsor.telegram}
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
                      value={sponsor.email}
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
                      value={sponsor.phone}
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
