import '../../assets/styles/styles.scoped.css'
import mainLogo from '../../assets/images/main-logo.svg'

function mainPage() {
  return (
    <section className="main_page">
    <div className="main_content">
      <div className="top_text">
        <p className="top_title">Первый в истории</p>
        <p className="top_description">
          Не имеющий аналогов, крипто - алгоритм!
        </p>
      </div>
      <div className="color_delimiter" />
      <div className="main_center">
        <img src={mainLogo} alt="main-logo" />
      </div>
      <div className="color_delimiter" />
      <div className="bottom_text">
        <p className="bottom_description">
          Обеспечит вам бесконечный источник дохода
        </p>
        <p className="bottom_title">на долгие годы</p>
      </div>
      <div className="main_banner">
        <p className="main_banner_title">
          Присоединись и участвуй в распределении «Maxi Bonus»
        </p>
        <p className="main_banner_description">32 540 BNB</p>
      </div>
    </div>
  </section>
  );
}

export default mainPage;