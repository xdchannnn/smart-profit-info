import { useContext } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/dashboard.scoped.css";
import AuthContext from "../../context/auth.context";

function DashboardMain() {
  const { user, settings } = useContext(AuthContext);

  return (
    <div className="main_block">
      <div className="main_content">
        <div className="left_block">
          <div className="profile_block">
            <div className="border_start_blue" />
            <div className="border_end_blue" />
            <Link to="/profile">
              <div className="settings_item">
                <img src="assets/images/settings-icon.svg" />
                <p className="settings_text">Настройка вашего профиля</p>
              </div>
            </Link>
            <div className="profile_settings">
              <div className="profile_image_block">
                <img src="assets/images/profile-img.jpg" />
              </div>
              <div className="profile_content_block">
                <p className="username_text">{user.full_name}</p>
                <p className="id_text">ID: {user.id}</p>
                <p className="status_text">
                  Текущий статус:
                  <a href="#" className="status_link">
                    {settings.status ? settings.status : null}
                  </a>
                </p>
                <div className="profile_link_block">
                  <img src="assets/images/copy-icon.svg" />
                  <a href="#" className="profile_link">
                    http://smartprofit.com/{settings.contract_id}
                  </a>
                </div>
              </div>
            </div>
            <Link to="/activation">
              <div className="activation_block">
                <p className="activation_text">ЗАПИСЬ АКТИВНА</p>
              </div>
            </Link>
            <div className="time_block">
              <div className="eTimer" />
            </div>
            <div className="partner_block">
              <input
                type="text"
                className="partner_input"
                placeholder="Помочь партнеру"
              />
              <a href="#">
                <div className="save_button_block">
                  <div className="save_icon" />
                  <p className="save_text">Сохранить</p>
                </div>
              </a>
            </div>
            <div className="referal_block">
              <img src="assets/images/blue-copy.svg" />
              <Link to={`sponsor/${settings.ref_id}`} className="referal_text">
                Ваш спонсор
              </Link>
            </div>
          </div>

          <div className="bonus_block">
            <div className="border_start_amount_blue" />
            <div className="border_end_amount_blue" />
            <div className="bonus_content">
              <button
                className="info_icon"
                type="button"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                title="Maxi Bonus"
                data-bs-content="
                          Распределяется между участниками, достигшими, или активировавшими статус «Maxi Profit». Позволяет получать доход на первых этапах развития."
              >
                <img src="assets/images/info-icon.svg" />
              </button>
              <div className="item_block">
                <div className="item_icon">
                  <img src="assets/images/bonus-blue.svg" />
                </div>
                <div className="item_content">
                  <p className="item_title">Maxi Bonus:</p>
                  <p className="item_description">
                    TRX: 3 450.15 | USD: 223.97
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right_block">
          <div className="one_row">
            <div className="partner_amount_block">
              <div className="border_start_amount_blue" />
              <div className="border_end_amount_blue" />
              <div className="partner_amount_content">
                <button
                  className="info_icon"
                  type="button"
                  data-bs-container="body"
                  data-bs-toggle="popover"
                  data-bs-placement="left"
                  title="Партнерская прибыль"
                  data-bs-content="
                          Это статистика ваших доходов за личное привлечение партнеров в вашу команду."
                >
                  <img src="assets/images/info-icon.svg" />
                </button>
                <div className="two_item_block">
                  <div className="two_item_content">
                    <div className="item_icon">
                      <img src="assets/images/partner_score.svg" />
                    </div>
                    <div className="item_content">
                      <p className="item_title">Партнерская прибыль:</p>
                      <p className="item_description">
                        BNB: {user.partner_income.BNB} | USD:{" "}
                        {user.partner_income.USD}
                      </p>
                    </div>
                  </div>
                  <div className="item_link_block">
                    <p className="item_link_text">
                      BNB:
                      <a href="#" className="item_link">
                        {user.wallet}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="partner_amount_block">
              <div className="border_start_amount_blue" />
              <div className="border_end_amount_blue" />
              <div className="partner_amount_content">
                <button
                  className="info_icon"
                  type="button"
                  data-bs-container="body"
                  data-bs-toggle="popover"
                  data-bs-placement="left"
                  title="Прибыль с уровней"
                  data-bs-content="
                          Это статистика ваших доходов с уровней , от вашей, и общей команды."
                >
                  <img src="assets/images/info-icon.svg" />
                </button>
                <div className="two_item_block">
                  <div className="two_item_content">
                    <div className="item_icon">
                      <img src="assets/images/wallet-icon.svg" />
                    </div>
                    <div className="item_content">
                      <p className="item_title">Прибыль с уровней:</p>
                      <p className="item_description">
                        BNB: {user.level_income.BNB} | USD:{" "}
                        {user.level_income.USD}
                      </p>
                    </div>
                  </div>
                  <div className="item_link_block">
                    <p className="item_link_text">
                      BNB:
                      <a href="#" className="item_link">
                        {user.wallet}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="two_row">
            <div className="partner_amount_block">
              <div className="border_start_amount_blue" />
              <div className="border_end_amount_blue" />
              <div className="partner_amount_content">
                <button
                  className="info_icon"
                  type="button"
                  data-bs-container="body"
                  data-bs-toggle="popover"
                  data-bs-placement="left"
                  title="Моя команда"
                  data-bs-content="
                         Количество  привлеченных вами партнеров. А  так же статистика общей команды."
                >
                  <img src="assets/images/info-icon.svg" />
                </button>
                <div className="two_item_block">
                  <div className="two_item_content">
                    <div className="item_icon">
                      <img src="assets/images/team-icon.svg" />
                    </div>
                    <div className="item_content">
                      <p className="item_title">Моя команда:</p>
                      <p className="item_description">
                        {user.my_team.partners_count} PARTNERS
                      </p>
                    </div>
                  </div>
                  <div className="item_link_block">
                    <p className="item_link_text">
                      Общая команда:
                      <a href="#" className="item_link">
                        {user.my_team.team_count}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="partner_amount_block">
              <div className="border_start_amount_blue" />
              <div className="border_end_amount_blue" />
              <div className="partner_amount_content">
                <button
                  className="info_icon"
                  type="button"
                  data-bs-container="body"
                  data-bs-toggle="popover"
                  data-bs-placement="left"
                  title="Упущенная прибыль"
                  data-bs-content="
                          Статистика упущенной прибыли с уровней, за счет не вовремя выполненной квалификации."
                >
                  <img src="assets/images/info-icon.svg" />
                </button>
                <div className="two_item_block">
                  <div className="two_item_content">
                    <div className="item_icon">
                      <img src="assets/images/lost-icon.svg" />
                    </div>
                    <div className="item_content">
                      <p className="item_title">Упущенная прибыль:</p>
                      <p className="item_description">TRX: 452 | USD: 29.21</p>
                    </div>
                  </div>
                  <div className="item_link_block">
                    <p className="item_link_text">
                      BNB:
                      <a href="#" className="item_link">
                        {user.wallet}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="levels_block">
            <a href="#" style={{ width: "100%" }}>
              <div className="level_item">
                <div className="level_top_child_border" />
                <div className="level_bottom_child_border" />
                <div className="level_content">
                  <p className="level_title">Уровень 1</p>
                  <div className="quantity_block">
                    <p className="quantity_text">{user.levels[0].level_1}</p>
                  </div>
                </div>
              </div>
            </a>
            <div className="bottom_levels_block">
              {user.levels.slice(1).map((level, index) => (
                <a key={index} href="#" style={{ width: "100%" }}>
                  <div className="level_item">
                    <div className="level_top_child_border" />
                    <div className="level_bottom_child_border" />
                    <div className="level_content">
                      <p className="level_title">Уровень {index + 2}</p>
                      <div className="quantity_block">
                        <p className="quantity_text">
                          {level[`level_${index + 2}`]}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="banner_block">
            <div className="border_start_amount_blue" />
            <div className="border_end_amount_blue" />
            {/* content or image */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardMain;
