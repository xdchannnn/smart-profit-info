import { useTranslation } from "react-i18next";
import "../../assets/styles/general.scoped.css";

import RightArrow from "../../assets/images/right-arrow.svg";
import LeftArrow from "../../assets/images/left-arrow.svg";

function ButtonsBlock() {
  const { t } = useTranslation();

  return (
    <div className="buttons_block">
      <button
        className="prev_button"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <img src={RightArrow} alt="right-arrow" className="right_icon" />
        <span>{t("myteam:TOP_DESCRIPTION_PREVIOUS")}</span>
      </button>
      <p className="table_page_indicator">1/20</p>
      <button
        className="next_button"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span>{t("myteam:TOP_DESCRIPTION_NEXT")}</span>
        <img src={LeftArrow} alt="left-arrow" className="left_icon" />
      </button>
    </div>
  );
}
export default ButtonsBlock;
