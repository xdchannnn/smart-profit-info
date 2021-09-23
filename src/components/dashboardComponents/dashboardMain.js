import "../../assets/styles/dashboard.scoped.css";
import { Fragment, useCallback, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth.context";
import { toast } from "react-toastify";

import SettingsIconPurple from "../../assets/images/settings-icon-purple.svg";
import SettingsIconBlue from "../../assets/images/settings-icon-blue.svg";
import SettingsIconGreen from "../../assets/images/settings-icon-green.svg";
import SettingsIconYellow from "../../assets/images/settings-icon-yellow.svg";
import ProfileImg from "../../assets/images/profile-img.jpg";
import CopyIcon from "../../assets/images/copy-icon.svg";
import BlueCopy from "../../assets/images/copy-blue.svg";
import PurpleCopy from "../../assets/images/copy-purple.svg";
import GreenCopy from "../../assets/images/copy-green.svg";
import YellowCopy from "../../assets/images/copy-yellow.svg";
import BonusBlue from "../../assets/images/bonus-blue.svg";
import BonusPurple from "../../assets/images/bonus-purple.svg";
import BonusGreen from "../../assets/images/bonus-green.svg";
import BonusYellow from "../../assets/images/bonus-yellow.svg";
import InfoIcon from "../../assets/images/info-icon.svg";
import PartnerScore from "../../assets/images/partner_score.svg";
import WalletIcon from "../../assets/images/wallet-icon.svg";
import TeamIcon from "../../assets/images/team-icon.svg";
import LostIcon from "../../assets/images/lost-icon.svg";

import { Popover } from "bootstrap/dist/js/bootstrap.esm.min.js";

import { useTranslation } from "react-i18next";

import Timer from "react-compound-timer";

import BannerBlue from "../../assets/images/banner-blue.png";
import BannerPurple from "../../assets/images/banner-purple.png";
import BannerGreen from "../../assets/images/banner-green.png";
import BannerYellow from "../../assets/images/banner-yellow.png";

import Preloader from "../loaders/Preloader";

import FREE from "../../assets/images/fr_purple.svg";
import SP from "../../assets/images/sp_blue.svg";
import FP from "../../assets/images/fp_green.svg";
import MP from "../../assets/images/mp_yellow.svg";
import useBonus from "../../hooks/web3/bonus.hook";
import usePrice from "../../hooks/web3/price.hook";

function DashboardMain() {
  const { user, settings, loading } = useContext(AuthContext);
  const { t } = useTranslation();

  const { getMaxiBonus, maxiBonus } = useBonus();
  const { getLatestPrice, latestPrice } = usePrice();

  useEffect(() => {
    getMaxiBonus();
    getLatestPrice();
  }, []);

  useEffect(() => {
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="popover"]')
    ).forEach((tooltipNode) => new Popover(tooltipNode));
  });

  const copyToClipBoard = (text) =>
    navigator.clipboard
      .writeText(text)
      .then(() => toast(t("toast:COPY_CLIPBOARD"), { type: "success" }))
      .catch(() => toast("Could not copy text.", { type: "error" }));

  const ETimer = useCallback(() => {
    return (
      <Timer
        initialTime={
          user && user.end_plan_time
            ? String(user.end_plan_time * 1000 - Date.now())
            : "0"
        }
        direction="backward"
      >
        {() => (
          <Fragment>
            <div
              style={{
                color: "white",
                paddingTop: 20,
                display: "flex",
                fontSize: 24,
              }}
            >
              <div
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                  fontSize: 24,
                }}
              >
                <Timer.Days />
                <p style={{ fontSize: 14 }}>
                  {t("dashboard:TOP_DESCRIPTION_DAYS")}
                </p>
              </div>
              {" : "}
              <div
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                  fontSize: 24,
                }}
              >
                <Timer.Hours />
                <p style={{ fontSize: 14 }}>
                  {t("dashboard:TOP_DESCRIPTION_HOURS")}
                </p>
              </div>
              {" : "}
              <div
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                  fontSize: 24,
                }}
              >
                <Timer.Minutes />
                <p style={{ fontSize: 14 }}>
                  {t("dashboard:TOP_DESCRIPTION_MINUTES")}
                </p>
              </div>
              {" : "}
              <div
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                  fontSize: 24,
                }}
              >
                <Timer.Seconds />
                <p style={{ fontSize: 14 }}>
                  {t("dashboard:TOP_DESCRIPTION_SECONDS")}
                </p>
              </div>
            </div>
          </Fragment>
        )}
      </Timer>
    );
  }, [user]);

  return (
    <>
      {loading && <Preloader />}
      <div className="main_block">
        <div className="main_content">
          <div className="left_block">
            <div
              className="profile_block"
              style={{
                backgroundImage:
                  settings &&
                  `url(${
                    settings.status === "Free"
                      ? FREE
                      : settings.status === "Start Profit"
                      ? SP
                      : settings.status === "Fixed Profit"
                      ? FP
                      : MP
                  })`,
              }}
            >
              <div
                className={`border_start ${(() => {
                  if (settings) {
                    switch (settings.status) {
                      case "Free":
                        return "border_start_purple";
                      case "Start Profit":
                        return "border_start_blue";
                      case "Fixed Profit":
                        return "border_start_green";
                      case "Maxi Profit":
                        return "border_start_yellow";
                      default:
                        return "border_start_blue";
                    }
                  }
                })()}`}
              />
              <div
                className={`border_end ${(() => {
                  if (settings) {
                    switch (settings.status) {
                      case "Free":
                        return "border_end_purple";
                      case "Start Profit":
                        return "border_end_blue";
                      case "Fixed Profit":
                        return "border_end_green";
                      case "Maxi Profit":
                        return "border_end_yellow";
                      default:
                        return "border_end_blue";
                    }
                  }
                })()}`}
              />
              <p style={{ color: "white", marginBottom: 8 }}>
                LOGIN: {settings && settings.login}
              </p>
              <Link to="/profile">
                <div className="settings_item">
                  <img
                    src={(() => {
                      if (settings) {
                        switch (settings.status) {
                          case "Free":
                            return SettingsIconPurple;
                          case "Start Profit":
                            return SettingsIconBlue;
                          case "Fixed Profit":
                            return SettingsIconGreen;
                          case "Maxi Profit":
                            return SettingsIconYellow;
                          default:
                            return SettingsIconBlue;
                        }
                      }
                    })()}
                  />
                  <p className="settings_text">{t("dashboard:TOP_TITLE")}</p>
                </div>
              </Link>
              <div className="profile_settings">
                <div className="profile_image_block">
                  <img src={ProfileImg} />
                </div>
                <div className="profile_content_block">
                  <p className="username_text">{user && user.full_name}</p>
                  {settings && settings.contract_id && (
                    <p className="id_text">ID: {settings.contract_id}</p>
                  )}
                  <p className="status_text">
                    {t("dashboard:TOP_DESCRIPTION_CURRENT")}:
                    <a
                      className="status_link"
                      style={{
                        color: (() => {
                          if (settings) {
                            switch (settings.status) {
                              case "Free":
                                return "#728ab3";
                              case "Start Profit":
                                return "#54cdef";
                              case "Fixed Profit":
                                return "#5cd58e";
                              case "Maxi Profit":
                                return "#f2ca6b";
                              default:
                                return "#54cdef";
                            }
                          }
                        })(),
                      }}
                    >
                      {settings && settings.status
                        ? settings.status.toUpperCase()
                        : null}
                    </a>
                  </p>
                  {settings && settings.contract_id && (
                    <div className="profile_link_block">
                      <img src={CopyIcon} />
                      <a
                        href="#"
                        className="profile_link"
                        onClick={() =>
                          copyToClipBoard(
                            `http://smartprofit.com/${settings.contract_id}`
                          )
                        }
                      >
                        http://smartprofit.com/
                        {settings.contract_id}
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <Link to="/activation">
                <div
                  className={`activation_block ${(() => {
                    if (settings && !settings.expire) {
                      switch (settings.status) {
                        case "Free":
                          return "blinking";
                        case "Start Profit":
                          return "blinking-blue";
                        case "Fixed Profit":
                          return "blinking-green";
                        case "Maxi Profit":
                          return "blinking-yellow";
                        default:
                          return "blinking";
                      }
                    }
                  })()}`}
                  style={{
                    background: (() => {
                      if (settings) {
                        switch (settings.status) {
                          case "Free":
                            return "#728ab3";
                          case "Start Profit":
                            return "#54cdef";
                          case "Fixed Profit":
                            return "#5cd58e";
                          case "Maxi Profit":
                            return "#f2ca6b";
                          default:
                            return "#54cdef";
                        }
                      }
                    })(),
                  }}
                >
                  <p className="activation_text">
                    {settings && settings.status === "Free"
                      ? t("dashboard:TOP_DESCRIPTION_ACTIVATE")
                      : t("dashboard:TOP_DESCRIPTION_ACTIVE")}
                  </p>
                </div>
              </Link>
              <div className="time_block">
                {
                  <div className="eTimer">
                    <ETimer />
                  </div>
                }
              </div>
              <div className="partner_block">
                <button
                  style={{ marginBottom: 0, marginLeft: 5 }}
                  className="info_icon partner_info_mob"
                  type="button"
                  data-bs-container="body"
                  data-bs-toggle="popover"
                  data-bs-placement="left"
                  data-bs-trigger="hover"
                  title={t("dashboard:TOP_DESCRIPTION_ENTERID_TITLE")}
                  data-bs-content={t("dashboard:TOP_DESCRIPTION_ENTERID")}
                >
                  <img src={InfoIcon} style={{ width: 15, height: 15 }} />
                </button>

                <input
                  type="text"
                  className="partner_input"
                  placeholder={t("dashboard:TOP_DESCRIPTION_HELP")}
                />

                <button
                  style={{ marginBottom: 30, marginLeft: 5 }}
                  className="info_icon partner_info"
                  type="button"
                  data-bs-container="body"
                  data-bs-toggle="popover"
                  data-bs-placement="left"
                  data-bs-trigger="hover"
                  title={t("dashboard:TOP_DESCRIPTION_ENTERID_TITLE")}
                  data-bs-content={t("dashboard:TOP_DESCRIPTION_ENTERID")}
                >
                  <img src={InfoIcon} style={{ width: 15, height: 15 }} />
                </button>

                <a href="#" style={{ marginLeft: 10 }}>
                  <div className="save_button_block">
                    <div className="save_icon" />
                    <p className="save_text">
                      {t("dashboard:TOP_DESCRIPTION_SAVE")}
                    </p>
                  </div>
                </a>
              </div>
              <div className="referal_block">
                <img
                  src={(() => {
                    if (settings) {
                      switch (settings.status) {
                        case "Free":
                          return PurpleCopy;
                        case "Start Profit":
                          return BlueCopy;
                        case "Fixed Profit":
                          return GreenCopy;
                        case "Maxi Profit":
                          return YellowCopy;
                        default:
                          return BlueCopy;
                      }
                    }
                  })()}
                />
                <Link
                  to={`sponsor/${settings && settings.ref_id}`}
                  className="referal_text"
                >
                  {t("dashboard:TOP_DESCRIPTION_YOURSPONSOR")}
                </Link>
              </div>
            </div>

            <div className="bonus_block">
              <div
                className={`border_start_amount ${(() => {
                  if (settings) {
                    switch (settings.status) {
                      case "Free":
                        return "border_start_amount_purple";
                      case "Start Profit":
                        return "border_start_amount_blue";
                      case "Fixed Profit":
                        return "border_start_amount_green";
                      case "Maxi Profit":
                        return "border_start_amount_yellow";
                      default:
                        return "border_start_amount_blue";
                    }
                  }
                })()}`}
              />
              <div
                className={`border_end_amount ${(() => {
                  if (settings) {
                    switch (settings.status) {
                      case "Free":
                        return "border_end_amount_purple";
                      case "Start Profit":
                        return "border_end_amount_blue";
                      case "Fixed Profit":
                        return "border_end_amount_green";
                      case "Maxi Profit":
                        return "border_end_amount_yellow";
                      default:
                        return "border_end_amount_blue";
                    }
                  }
                })()}`}
              />
              <div className="bonus_content">
                <button
                  className="info_icon"
                  type="button"
                  data-bs-container="body"
                  data-bs-toggle="popover"
                  data-bs-placement="left"
                  data-bs-trigger="hover"
                  title="Maxi Bonus"
                  data-bs-content={t("dashboard:TOP_DESCRIPTION_POPUPWINDOW")}
                >
                  <img src={InfoIcon} />
                </button>
                <div className="item_block">
                  <div className="item_icon">
                    <img
                      src={(() => {
                        if (settings) {
                          switch (settings.status) {
                            case "Free":
                              return BonusPurple;
                            case "Start Profit":
                              return BonusBlue;
                            case "Fixed Profit":
                              return BonusGreen;
                            case "Maxi Profit":
                              return BonusYellow;
                            default:
                              return BonusBlue;
                          }
                        }
                      })()}
                    />
                  </div>
                  <div className="item_content">
                    <p
                      className="item_title"
                      style={{
                        color: (() => {
                          if (settings) {
                            switch (settings.status) {
                              case "Free":
                                return "#728ab3";
                              case "Start Profit":
                                return "#54cdef";
                              case "Fixed Profit":
                                return "#5cd58e";
                              case "Maxi Profit":
                                return "#f2ca6b";
                              default:
                                return "#54cdef";
                            }
                          }
                        })(),
                      }}
                    >
                      {t("dashboard:TOP_DESCRIPTION_MAXIBONUS")}
                    </p>
                    <p className="item_description">
                      BNB: {(maxiBonus / Math.pow(10, 18)).toFixed(4)} | USD:{" "}
                      {((maxiBonus / Math.pow(10, 18)) * latestPrice).toFixed(
                        2
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right_block">
            <div className="one_row">
              <div className="partner_amount_block">
                <div
                  className={`border_start_amount ${(() => {
                    if (settings) {
                      switch (settings.status) {
                        case "Free":
                          return "border_start_amount_purple";
                        case "Start Profit":
                          return "border_start_amount_blue";
                        case "Fixed Profit":
                          return "border_start_amount_green";
                        case "Maxi Profit":
                          return "border_start_amount_yellow";
                        default:
                          return "border_start_amount_blue";
                      }
                    }
                  })()}`}
                />
                <div
                  className={`border_end_amount ${(() => {
                    if (settings) {
                      switch (settings.status) {
                        case "Free":
                          return "border_end_amount_purple";
                        case "Start Profit":
                          return "border_end_amount_blue";
                        case "Fixed Profit":
                          return "border_end_amount_green";
                        case "Maxi Profit":
                          return "border_end_amount_yellow";
                        default:
                          return "border_end_amount_blue";
                      }
                    }
                  })()}`}
                />
                <div className="partner_amount_content">
                  <button
                    className="info_icon"
                    type="button"
                    data-bs-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="left"
                    data-bs-trigger="hover"
                    title={t("dashboard:TOP_DESCRIPTION_POPUPWINDOW1_TITLE")}
                    data-bs-content={t(
                      "dashboard:TOP_DESCRIPTION_POPUPWINDOW1"
                    )}
                  >
                    <img src={InfoIcon} />
                  </button>
                  <div className="two_item_block">
                    <div className="two_item_content">
                      <div className="item_icon">
                        <img src={PartnerScore} />
                      </div>
                      <div className="item_content">
                        <p
                          className="item_title"
                          style={{
                            color: (() => {
                              if (settings) {
                                switch (settings.status) {
                                  case "Free":
                                    return "#728ab3";
                                  case "Start Profit":
                                    return "#54cdef";
                                  case "Fixed Profit":
                                    return "#5cd58e";
                                  case "Maxi Profit":
                                    return "#f2ca6b";
                                  default:
                                    return "#54cdef";
                                }
                              }
                            })(),
                          }}
                        >
                          {t("dashboard:TOP_DESCRIPTION_AFFILIATEPROFIT")}
                        </p>
                        <p className="item_description">
                          BNB:{" "}
                          {user &&
                            parseFloat(user.partner_income.BNB).toFixed(4)}{" "}
                          | USD: {user && user.partner_income.USD}
                        </p>
                      </div>
                    </div>
                    <div className="item_link_block">
                      <p
                        className="item_link_text"
                        style={{
                          color: (() => {
                            if (settings) {
                              switch (settings.status) {
                                case "Free":
                                  return "#728ab3";
                                case "Start Profit":
                                  return "#54cdef";
                                case "Fixed Profit":
                                  return "#5cd58e";
                                case "Maxi Profit":
                                  return "#f2ca6b";
                                default:
                                  return "#54cdef";
                              }
                            }
                          })(),
                        }}
                      >
                        BNB:
                        <a href="#" className="item_link">
                          {user && user.wallet}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="partner_amount_block">
                <div
                  className={`border_start_amount ${(() => {
                    if (settings) {
                      switch (settings.status) {
                        case "Free":
                          return "border_start_amount_purple";
                        case "Start Profit":
                          return "border_start_amount_blue";
                        case "Fixed Profit":
                          return "border_start_amount_green";
                        case "Maxi Profit":
                          return "border_start_amount_yellow";
                        default:
                          return "border_start_amount_blue";
                      }
                    }
                  })()}`}
                />
                <div
                  className={`border_end_amount ${(() => {
                    if (settings) {
                      switch (settings.status) {
                        case "Free":
                          return "border_end_amount_purple";
                        case "Start Profit":
                          return "border_end_amount_blue";
                        case "Fixed Profit":
                          return "border_end_amount_green";
                        case "Maxi Profit":
                          return "border_end_amount_yellow";
                        default:
                          return "border_end_amount_blue";
                      }
                    }
                  })()}`}
                />
                <div className="partner_amount_content">
                  <button
                    className="info_icon"
                    type="button"
                    data-bs-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="left"
                    data-bs-trigger="hover"
                    title={t("dashboard:TOP_DESCRIPTION_POPUPWINDOW2_TITLE")}
                    data-bs-content={t(
                      "dashboard:TOP_DESCRIPTION_POPUPWINDOW2"
                    )}
                  >
                    <img src={InfoIcon} />
                  </button>
                  <div className="two_item_block">
                    <div className="two_item_content">
                      <div className="item_icon">
                        <img src={WalletIcon} />
                      </div>
                      <div className="item_content">
                        <p
                          className="item_title"
                          style={{
                            color: (() => {
                              if (settings) {
                                switch (settings.status) {
                                  case "Free":
                                    return "#728ab3";
                                  case "Start Profit":
                                    return "#54cdef";
                                  case "Fixed Profit":
                                    return "#5cd58e";
                                  case "Maxi Profit":
                                    return "#f2ca6b";
                                  default:
                                    return "#54cdef";
                                }
                              }
                            })(),
                          }}
                        >
                          {t("dashboard:TOP_DESCRIPTION_PROFITLEVELS")}
                        </p>
                        <p className="item_description">
                          BNB:{" "}
                          {user && parseFloat(user.level_income.BNB).toFixed(4)}{" "}
                          | USD: {user && user.level_income.USD}
                        </p>
                      </div>
                    </div>
                    <div className="item_link_block">
                      <p
                        className="item_link_text"
                        style={{
                          color: (() => {
                            if (settings) {
                              switch (settings.status) {
                                case "Free":
                                  return "#728ab3";
                                case "Start Profit":
                                  return "#54cdef";
                                case "Fixed Profit":
                                  return "#5cd58e";
                                case "Maxi Profit":
                                  return "#f2ca6b";
                                default:
                                  return "#54cdef";
                              }
                            }
                          })(),
                        }}
                      >
                        BNB:
                        <a href="#" className="item_link">
                          {user && user.wallet}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="two_row">
              <div className="partner_amount_block">
                <div
                  className={`border_start_amount ${(() => {
                    if (settings) {
                      switch (settings.status) {
                        case "Free":
                          return "border_start_amount_purple";
                        case "Start Profit":
                          return "border_start_amount_blue";
                        case "Fixed Profit":
                          return "border_start_amount_green";
                        case "Maxi Profit":
                          return "border_start_amount_yellow";
                        default:
                          return "border_start_amount_blue";
                      }
                    }
                  })()}`}
                />
                <div
                  className={`border_end_amount ${(() => {
                    if (settings) {
                      switch (settings.status) {
                        case "Free":
                          return "border_end_amount_purple";
                        case "Start Profit":
                          return "border_end_amount_blue";
                        case "Fixed Profit":
                          return "border_end_amount_green";
                        case "Maxi Profit":
                          return "border_end_amount_yellow";
                        default:
                          return "border_end_amount_blue";
                      }
                    }
                  })()}`}
                />
                <div className="partner_amount_content">
                  <button
                    className="info_icon"
                    type="button"
                    data-bs-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="left"
                    data-bs-trigger="hover"
                    title={t("dashboard:TOP_DESCRIPTION_POPUPWINDOW3_TITLE")}
                    data-bs-content={t(
                      "dashboard:TOP_DESCRIPTION_POPUPWINDOW3"
                    )}
                  >
                    <img src={InfoIcon} />
                  </button>
                  <div className="two_item_block">
                    <div className="two_item_content">
                      <div className="item_icon">
                        <img src={TeamIcon} />
                      </div>
                      <div className="item_content">
                        <p
                          className="item_title"
                          style={{
                            color: (() => {
                              if (settings) {
                                switch (settings.status) {
                                  case "Free":
                                    return "#728ab3";
                                  case "Start Profit":
                                    return "#54cdef";
                                  case "Fixed Profit":
                                    return "#5cd58e";
                                  case "Maxi Profit":
                                    return "#f2ca6b";
                                  default:
                                    return "#54cdef";
                                }
                              }
                            })(),
                          }}
                        >
                          {t("dashboard:TOP_DESCRIPTION_MYTEAM")}
                        </p>
                        <p className="item_description">
                          {user && user.my_team.partners_count} PARTNERS
                        </p>
                      </div>
                    </div>
                    <div className="item_link_block">
                      <p
                        className="item_link_text"
                        style={{
                          color: (() => {
                            if (settings) {
                              switch (settings.status) {
                                case "Free":
                                  return "#728ab3";
                                case "Start Profit":
                                  return "#54cdef";
                                case "Fixed Profit":
                                  return "#5cd58e";
                                case "Maxi Profit":
                                  return "#f2ca6b";
                                default:
                                  return "#54cdef";
                              }
                            }
                          })(),
                        }}
                      >
                        {t("dashboard:TOP_DESCRIPTION_GENERALTEAM1")}
                        <a href="#" className="item_link">
                          {user && user.my_team.team_count}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="partner_amount_block">
                <div
                  className={`border_start_amount ${(() => {
                    if (settings) {
                      switch (settings.status) {
                        case "Free":
                          return "border_start_amount_purple";
                        case "Start Profit":
                          return "border_start_amount_blue";
                        case "Fixed Profit":
                          return "border_start_amount_green";
                        case "Maxi Profit":
                          return "border_start_amount_yellow";
                        default:
                          return "border_start_amount_blue";
                      }
                    }
                  })()}`}
                />
                <div
                  className={`border_end_amount ${(() => {
                    if (settings) {
                      switch (settings.status) {
                        case "Free":
                          return "border_end_amount_purple";
                        case "Start Profit":
                          return "border_end_amount_blue";
                        case "Fixed Profit":
                          return "border_end_amount_green";
                        case "Maxi Profit":
                          return "border_end_amount_yellow";
                        default:
                          return "border_end_amount_blue";
                      }
                    }
                  })()}`}
                />
                <div className="partner_amount_content">
                  <button
                    className="info_icon"
                    type="button"
                    data-bs-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="left"
                    title={t("dashboard:TOP_DESCRIPTION_POPUPWINDOW4_TITLE")}
                    data-bs-trigger="hover"
                    data-bs-content={t(
                      "dashboard:TOP_DESCRIPTION_POPUPWINDOW4"
                    )}
                  >
                    <img src={InfoIcon} />
                  </button>
                  <div className="two_item_block">
                    <div className="two_item_content">
                      <div className="item_icon">
                        <img src={LostIcon} />
                      </div>
                      <div className="item_content">
                        <p
                          className="item_title"
                          style={{
                            color: (() => {
                              if (settings) {
                                switch (settings.status) {
                                  case "Free":
                                    return "#728ab3";
                                  case "Start Profit":
                                    return "#54cdef";
                                  case "Fixed Profit":
                                    return "#5cd58e";
                                  case "Maxi Profit":
                                    return "#f2ca6b";
                                  default:
                                    return "#54cdef";
                                }
                              }
                            })(),
                          }}
                        >
                          {t("dashboard:TOP_DESCRIPTION_LOSTPROFIT")}
                        </p>
                        <p className="item_description">
                          BNB:{" "}
                          {user && parseFloat(user.lost_income.BNB).toFixed(4)}{" "}
                          | USD: {user && user.lost_income.USD}
                        </p>
                      </div>
                    </div>
                    <div className="item_link_block">
                      <p
                        className="item_link_text"
                        style={{
                          color: (() => {
                            if (settings) {
                              switch (settings.status) {
                                case "Free":
                                  return "#728ab3";
                                case "Start Profit":
                                  return "#54cdef";
                                case "Fixed Profit":
                                  return "#5cd58e";
                                case "Maxi Profit":
                                  return "#f2ca6b";
                                default:
                                  return "#54cdef";
                              }
                            }
                          })(),
                        }}
                      >
                        BNB:
                        <a href="#" className="item_link">
                          {user && user.wallet}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="levels_block">
              <Link to="/general-team/1" style={{ width: "100%" }}>
                <div className="level_item">
                  <div
                    className={`level_top_child_border ${(() => {
                      if (settings) {
                        switch (settings.status) {
                          case "Free":
                            return "level_top_child_border-purple";
                          case "Start Profit":
                            return "level_top_child_border-blue";
                          case "Fixed Profit":
                            return "level_top_child_border-green";
                          case "Maxi Profit":
                            return "level_top_child_border-yellow";
                          default:
                            return "level_top_child_border-blue";
                        }
                      }
                    })()}`}
                  />
                  <div
                    className={`level_bottom_child_border ${(() => {
                      if (settings) {
                        switch (settings.status) {
                          case "Free":
                            return "level_bottom_child_border-purple";
                          case "Start Profit":
                            return "level_bottom_child_border-blue";
                          case "Fixed Profit":
                            return "level_bottom_child_border-green";
                          case "Maxi Profit":
                            return "level_bottom_child_border-yellow";
                          default:
                            return "level_bottom_child_border-blue";
                        }
                      }
                    })()}`}
                  />
                  <div className="level_content">
                    <p className="level_title">
                      {t("dashboard:TOP_DESCRIPTION_LEVEL")} 1
                    </p>
                    <div className="quantity_block">
                      <p className="quantity_text">
                        {user && user.levels[0].level_1}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="bottom_levels_block">
                {user &&
                  user.levels.slice(1).map((level, index) => (
                    <Link
                      key={index}
                      to={`/general-team/${index + 2}`}
                      style={{ width: "100%" }}
                    >
                      <div className="level_item">
                        <div
                          className={`level_top_child_border ${(() => {
                            if (settings) {
                              switch (settings.status) {
                                case "Free":
                                  return "level_top_child_border-purple";
                                case "Start Profit":
                                  return "level_top_child_border-blue";
                                case "Fixed Profit":
                                  return "level_top_child_border-green";
                                case "Maxi Profit":
                                  return "level_top_child_border-yellow";
                                default:
                                  return "level_top_child_border-blue";
                              }
                            }
                          })()}`}
                        />
                        <div
                          className={`level_bottom_child_border ${(() => {
                            if (settings) {
                              switch (settings.status) {
                                case "Free":
                                  return "level_bottom_child_border-purple";
                                case "Start Profit":
                                  return "level_bottom_child_border-blue";
                                case "Fixed Profit":
                                  return "level_bottom_child_border-green";
                                case "Maxi Profit":
                                  return "level_bottom_child_border-yellow";
                                default:
                                  return "level_bottom_child_border-blue";
                              }
                            }
                          })()}`}
                        />
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
                    </Link>
                  ))}
              </div>
            </div>
            <div className="banner_block">
              <img
                src={(() => {
                  if (settings) {
                    switch (settings.status) {
                      case "Free":
                        return BannerPurple;
                      case "Start Profit":
                        return BannerBlue;
                      case "Fixed Profit":
                        return BannerGreen;
                      case "Maxi Profit":
                        return BannerYellow;
                      default:
                        return BannerBlue;
                    }
                  }
                })()}
                alt="banner"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DashboardMain;
