import "../../assets/styles/dashboard.scoped.css";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth.context";

import SettingsIcon from "../../assets/images/settings-icon.svg";
import ProfileImg from "../../assets/images/profile-img.jpg";
import CopyIcon from "../../assets/images/copy-icon.svg";
import BlueCopy from "../../assets/images/blue-copy.svg";
import BonusBlue from "../../assets/images/bonus-blue.svg";
import InfoIcon from "../../assets/images/info-icon.svg";
import PartnerScore from "../../assets/images/partner_score.svg";
import WalletIcon from "../../assets/images/wallet-icon.svg";
import TeamIcon from "../../assets/images/team-icon.svg";
import LostIcon from "../../assets/images/lost-icon.svg";

import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js'

import { useTranslation } from "react-i18next";

function DashboardMain() {
  const { user, settings } = useContext(AuthContext);
  const { t } = useTranslation();
  
  useEffect(() => {
    Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]'))
    .forEach(tooltipNode => new Popover(tooltipNode))
    });

  return (
    <div className="main_block">
      <div className="main_content">
        <div className="left_block">
          <div className="profile_block">
            <div className="border_start_blue" />
            <div className="border_end_blue" />
            <Link to="/profile">
              <div className="settings_item">
                <img src={SettingsIcon} />
                <p className="settings_text">{t("dashboard:TOP_TITLE")}</p>
              </div>
            </Link>
            <div className="profile_settings">
              <div className="profile_image_block">
                <img src={ProfileImg} />
              </div>
              <div className="profile_content_block">
                <p className="username_text">{user.full_name}</p>
                <p className="id_text">ID: {settings.contract_id}</p>
                <p className="status_text">
                  {t("dashboard:TOP_DESCRIPTION_CURRENT")}
                  <a href="#" className="status_link">
                    {settings.status ? settings.status : null}
                  </a>
                </p>
                <div className="profile_link_block">
                  <img src={CopyIcon} />
                  <a href="#" className="profile_link">
                    http://smartprofit.com/{settings.contract_id}
                  </a>
                </div>
              </div>
            </div>
            <Link to="/activation">
              <div className="activation_block">
                <p className="activation_text">
                  {t("dashboard:TOP_DESCRIPTION_ACTIVE")}
                </p>
              </div>
            </Link>
            <div className="time_block">
              <div className="eTimer" />
            </div>
            <div className="partner_block">
              <input
                type="text"
                className="partner_input"
                placeholder={t("dashboard:TOP_DESCRIPTION_HELP")}
              />
              <a href="#">
                <div className="save_button_block">
                  <div className="save_icon" />
                  <p className="save_text">
                    {t("dashboard:TOP_DESCRIPTION_SAVE")}
                  </p>
                </div>
              </a>
            </div>
            <div className="referal_block">
              <img src={BlueCopy} />
              <Link to={`sponsor/${settings.ref_id}`} className="referal_text">
                {t("dashboard:TOP_DESCRIPTION_YOURSPONSOR")}
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
                data-bs-trigger="hover"
                title="Maxi Bonus"
                data-bs-content="
                          Распределяется между участниками, достигшими, или активировавшими статус «Maxi Profit». Позволяет получать доход на первых этапах развития."
              >
                <img src={InfoIcon} />
              </button>
              <div className="item_block">
                <div className="item_icon">
                  <img src={BonusBlue} />
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
                  data-bs-trigger="hover"
                  title="Партнерская прибыль"
                  data-bs-content="
                          Это статистика ваших доходов за личное привлечение партнеров в вашу команду."
                > 
                  <img src={InfoIcon} />
                </button>
                <div className="two_item_block">
                  <div className="two_item_content">
                    <div className="item_icon">
                      <img src={PartnerScore} />
                    </div>
                    <div className="item_content">
                      <p className="item_title">
                        {t("dashboard:TOP_DESCRIPTION_AFFILIATEPROFIT")}
                      </p>
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
                  data-bs-trigger="hover"
                  title="Прибыль с уровней"
                  data-bs-content="
                          Это статистика ваших доходов с уровней , от вашей, и общей команды."
                >
                  <img src={InfoIcon} />
                </button>
                <div className="two_item_block">
                  <div className="two_item_content">
                    <div className="item_icon">
                      <img src={WalletIcon} />
                    </div>
                    <div className="item_content">
                      <p className="item_title">
                        {t("dashboard:TOP_DESCRIPTION_PROFITLEVELS")}
                      </p>
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
                  data-bs-trigger="hover"
                  title="Моя команда"
                  data-bs-content="
                         Количество  привлеченных вами партнеров. А  так же статистика общей команды."
                >
                  <img src={InfoIcon} />
                </button>
                <div className="two_item_block">
                  <div className="two_item_content">
                    <div className="item_icon">
                      <img src={TeamIcon} />
                    </div>
                    <div className="item_content">
                      <p className="item_title">
                        {t("dashboard:TOP_DESCRIPTION_MYTEAM")}
                      </p>
                      <p className="item_description">
                        {user.my_team.partners_count} PARTNERS
                      </p>
                    </div>
                  </div>
                  <div className="item_link_block">
                    <p className="item_link_text">
                      {t("dashboard:TOP_DESCRIPTION_GENERALTEAM1")}
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
                  data-bs-trigger="hover"
                  data-bs-content="
                          Статистика упущенной прибыли с уровней, за счет не вовремя выполненной квалификации."
                >
                  <img src={InfoIcon} />
                </button>
                <div className="two_item_block">
                  <div className="two_item_content">
                    <div className="item_icon">
                      <img src={LostIcon} />
                    </div>
                    <div className="item_content">
                      <p className="item_title">
                        {t("dashboard:TOP_DESCRIPTION_LOSTPROFIT")}
                      </p>
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
                  <p className="level_title">
                    {t("dashboard:TOP_DESCRIPTION_LEVEL")} 1
                  </p>
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
                      <p className="level_title">
                        {t("dashboard:TOP_DESCRIPTION_LEVEL")} {index + 2}
                      </p>
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
