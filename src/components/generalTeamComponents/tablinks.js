import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import "../../assets/styles/dashboard.scoped.css";
import "../../assets/styles/general.scoped.css";
import AuthContext from "../../context/auth.context";

function Tablinks() {
  const { t } = useTranslation();
  const { user, settings } = useContext(AuthContext);
  const history = useHistory();

  const nav = (level) => history.push(`/general-team/${level}`);

  return (
    <div class="tab">
      {settings &&
        user &&
        user.levels.map((item, index) => (
          <button
            class="tablinks"
            onclick="openCity(event, 'LevelOne')"
            onClick={() => nav(index + 1)}
          >
            <div class="level_item">
              <div
                class={`level_top_child_border ${
                  settings.status === "Free"
                    ? "level_top_child_border-purple"
                    : settings.status === "Start Profit"
                    ? "level_top_child_border-blue"
                    : settings.status === "Fixed Profit"
                    ? "level_top_child_border-green"
                    : "level_top_child_border-yellow"
                }`}
              />
              <div
                class={`level_bottom_child_border ${
                  settings.status === "Free"
                    ? "level_bottom_child_border-purple"
                    : settings.status === "Start Profit"
                    ? "level_bottom_child_border-blue"
                    : settings.status === "Fixed Profit"
                    ? "level_bottom_child_border-green"
                    : "level_bottom_child_border-yellow"
                }`}
              />
              <div class="level_content">
                <p class="level_title">
                  {t("generalteam:TOP_DESCRIPTION_LEVELTEAM")} {index + 1}
                </p>
                <div class="quantity_block">
                  <p class="quantity_text">{item[`level_${index + 1}`]}</p>
                </div>
              </div>
            </div>
          </button>
        ))}
    </div>
  );
}
export default Tablinks;
