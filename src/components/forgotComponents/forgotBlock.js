import "../../assets/styles/forgot.scoped.css";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch.hook";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function Forgot() {
  const { t } = useTranslation();

  const { request, loading, error, clearError } = useFetch();

  const [email, setEmail] = useState("");
  const handleChange = (e) => setEmail(e.target.value);

  const handleSend = async (e) => {
    e.preventDefault();
    const result = await request("/forgot-password", "POST", { email });
    if (result) toast(result.success, { type: "success" });
  };

  useEffect(() => {
    if (error) {
      toast(error.message, { type: "error" });
      clearError();
    }
  }, [error]);

  return (
    <section className="forgot_block">
      <div className="forgot_content">
        <div className="forgot_form_block">
          <form className="forgot_form" onSubmit={handleSend}>
            <div className="form_header">
              <p className="form_header_title">{t("forgot:TOP_TITLE")}</p>
            </div>
            <div className="top_block">
              <img src={logo} className="logo_form" />
            </div>
            <div className="email_input_block">
              <p>
                {t("forgot:TOP_DESCRIPTION_EMAIL")}
                <span>*</span>
              </p>
              <input
                value={email}
                onChange={handleChange}
                type="email"
                className="email_input"
                id="email_input"
                placeholder={t("forgot:TOP_DESCRIPTION_DATA")}
                required
              />
            </div>
            <div className="form_footer">
              <p className="data_block">
                <button
                  disabled={loading}
                  type="submit"
                  className="forgot_button"
                >
                  {t("forgot:TOP_DESCRIPTION_SEND")}
                </button>
              </p>
            </div>
            <div className="forgot_footer">
              <p className="forgot_footer_title">
                {t("forgot:TOP_DESCRIPTION_ACCOUNT")}
              </p>
              <Link to="/login" className="forgot_footer_link">
                {t("forgot:TOP_DESCRIPTION_SIGNIN")}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Forgot;
