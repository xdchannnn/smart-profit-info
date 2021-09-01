import '../../assets/styles/general.scoped.css'
import '../../assets/styles/my-team.scoped.css'

function NewRegistrations() {

    return(
    <div id="NewRegister" className="tabcontent">
      <table className="general_table">
        <tbody>
          <tr>
            <td className="main_row">
              <p>Имя и Фамилия</p>
            </td>
            <td className="main_row">
              <p>ID</p>
            </td>
            <td className="main_row">
              <p>Email</p>
            </td>
            <td className="main_row">
              <p>Телефон</p>
            </td>
            <td className="main_row">
              <p>Дата регистрации</p>
            </td>
          </tr>
          <tr className="child_one">
            <td className="child_row">
              <p>Иван Иванов</p>
            </td>
            <td className="child_row">
              <div className="child_content">
                <p>
                  <span className="free_status">FP:</span> ID 56908
                </p>
                <div className="popover__wrapper">
                  <a href="#">
                    <p className="popover__title">
                      <img
                        src="assets/images/info-icon.svg"
                        className="info_popover_icon"
                      />
                    </p>
                  </a>
                  <div className="popover__content">
                    <p className="user_id">ID 56908</p>
                    <div className="user_information">
                      <p className="status_item">
                        Статус:{" "}
                        <span className="status_text_free">FreeProfit</span>
                      </p>
                      <p className="sponsor_id">
                        ID спонсора:{" "}
                        <span className="sponsor_text">ID 67890</span>
                      </p>
                      <p className="country_id">
                        Страна: <span className="country_text">Россия</span>
                      </p>
                      <p className="country_id">
                        Л/Команда: <span className="country_text">0</span>
                      </p>
                    </div>
                    <div className="social_media_user">
                      <div className="social_item">
                        <img src="assets/images/skype.svg" />
                        <p className="social_text">@sanekk000</p>
                      </div>
                      <div className="social_item">
                        <img src="assets/images/whatsapp.svg" />
                        <p className="social_text">+380996938560</p>
                      </div>
                      <div className="social_item">
                        <img src="assets/images/telegram-user.svg" />
                        <p className="social_text">strannik0004</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td className="child_row">
              <p>info@example.ru</p>
            </td>
            <td className="child_row">
              <p>+380996938560</p>
            </td>
            <td className="child_row">
              <p className="register_text">02.07.2021</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
  }

export default NewRegistrations;