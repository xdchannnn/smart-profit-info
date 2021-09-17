import { useTranslation } from "react-i18next";
import "../../assets/styles/dashboard.scoped.css";

function Modals() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="modal fade"
        id="computer_modal"
        tabIndex={-1}
        aria-labelledby="computer_modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal_header">
              <h5 className="modal-title" id="computer_modalLabel">
                {t("activation:TOP_DESCRIPTION_COMPUTER")}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <img src="assets/images/main.jpg" className="modal_img" />
              <img src="assets/images/main.jpg" className="modal_img" />
              <img src="assets/images/main.jpg" className="modal_img" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="mobile_modal"
        tabIndex={-1}
        aria-labelledby="mobile_modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal_header">
              <h5 className="modal-title" id="mobile_modalLabel">
                {t("activation:TOP_DESCRIPTION_MOBILE")}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <img src="assets/images/main.jpg" className="modal_img" />
              <img src="assets/images/main.jpg" className="modal_img" />
              <img src="assets/images/main.jpg" className="modal_img" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="hand_modal"
        tabIndex={-1}
        aria-labelledby="hand_modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal_header">
              <h5 className="modal-title" id="hand_modalLabel">
                {t("activation:TOP_DESCRIPTION_CONTRACT")}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <img src="assets/images/main.jpg" className="modal_img" />
              <img src="assets/images/main.jpg" className="modal_img" />
              <img src="assets/images/main.jpg" className="modal_img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modals;
