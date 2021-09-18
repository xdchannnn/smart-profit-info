import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../assets/styles/finance.scoped.css";
import "../../assets/styles/general.scoped.css";
import AuthContext from "../../context/auth.context";

import useFetch from "../../hooks/useFetch.hook";

function MyFinance() {
  const { t } = useTranslation();

  const { token } = useContext(AuthContext);
  const { request, error } = useFetch();

  useEffect(() => {
    (async () => {
      const result = await request("/get-income", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      console.log(result);
    })();
  }, [request]);

  return (
    <div id="MyFinance" className="tabcontent">
      <table className="general_table">
        <tbody>
          <tr>
            <td className="main_row">
              <p>{t("finance:TOP_DESCRIPTION_TRANSACTION")}</p>
            </td>
            <td className="main_row">
              <p>{t("finance:TOP_DESCRIPTION_FROMWHON")}</p>
            </td>
            <td className="main_row">
              <p>{t("finance:TOP_DESCRIPTION_LEVEL3")}</p>
            </td>
            <td className="main_row">
              <p>USD - {t("finance:TOP_DESCRIPTION_BNB2")}</p>
            </td>
            <td className="main_row">
              <p>{t("finance:TOP_DESCRIPTION_DATE3")}</p>
            </td>
          </tr>
          {Array(25)
            .fill()
            .map((item, index) => (
              <TableItem item={item} t={t} key={index} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

const TableItem = ({ item, t }) => (
  <tr className="child_one">
    <td className="child_row">{item && <p>1500</p>}</td>
    <td className="child_row">
      {item && (
        <p>
          <span className="green_text">FP:</span> ID 56908
        </p>
      )}
    </td>
    <td className="child_row">{item && <p>Реферальный</p>}</td>
    <td className="child_row">{item && <p>3500</p>}</td>
    <td className="child_row">
      {item && <p className="date_text">02.07.2021</p>}
    </td>
  </tr>
);

export default MyFinance;
