import "../../assets/styles/styles.scoped.css";
import decor from "../../assets/images/decor.png";
import { useTranslation } from "react-i18next";

const WorkPage = () => {
  const { t } = useTranslation();
  return (
    <section className="work_page">
      <div className="work_content">
        <p className="work_title">{t("landing:TOP_DESCRIPTION_TITLE")}</p>
        <p className="work_title_two">{t("landing:TOP_DESCRIPTION_STARTS")}</p>
        <img src={decor} alt="decor-icon" />
        <p className="work_text">{t("landing:TOP_DESCRIPTION_SMART")}</p>
        <div className="work_video_block">
          <iframe
            width={750}
            height={450}
            src="https://www.youtube.com/embed/HDIQH7Ydf1M"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
