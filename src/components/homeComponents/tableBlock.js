import "../../assets/styles/styles.scoped.css";
import decor2 from "../../assets/images/decor2.svg";
import table from "../../assets/images/EN.svg";
import { useTranslation } from "react-i18next";

function TableBlock() {
  const { t } = useTranslation();

  return (
    <section className="table_block">
      <div className="table_content">
        <p className="table_title">{t("landing:TOP_DESCRIPTION_TABLE")}</p>
        <img src={decor2} alt="decor" />
        <div className="table-responsive">
          <div className="score_block">
            <img src={table} alt="table-icon" className="table_img_block" />
          </div>
        </div>
        <p className="table_title">{t("landing:TOP_DESCRIPTION_POCKET")} </p>
      </div>
    </section>
  );
}

export default TableBlock;
