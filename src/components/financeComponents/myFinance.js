import { useContext, useEffect, useState } from "react";
import { useSSR, useTranslation } from "react-i18next";
import "../../assets/styles/finance.scoped.css";
import "../../assets/styles/general.scoped.css";
import AuthContext from "../../context/auth.context";

import useFetch from "../../hooks/useFetch.hook";
import usePrice from "../../hooks/web3/price.hook";

function MyFinance() {
  const { t } = useTranslation();

  const { token } = useContext(AuthContext);
  const { request, error } = useFetch();
  const { getLatestPrice, latestPrice } = usePrice();

  const [data, setData] = useState();

  useEffect(() => {
    getLatestPrice();
  }, []);

  useEffect(() => {
    (async () => {
      const result = await request("/get-income", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      if (result) {
        console.log(result);
        if (result.data.length < 25) {
          Array(25 - result.data.length)
            .fill()
            .map((item) => result.data.push(item));
          setData(result.data);
        } else setData(result.data);
      }
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
          {data &&
            data.map((item, index) => (
              <TableItem item={item} latestPrice={latestPrice} key={index} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

const TableItem = ({ item, latestPrice }) => (
  <tr className="child_one">
    <td className="child_row">{item && <p>{item.transaction_number}</p>}</td>
    <td className="child_row">{item && <p>ID {item.from}</p>}</td>
    <td className="child_row">{item && <p>{item.level}</p>}</td>
    <td className="child_row">
      {item && (
        <p>
          {(latestPrice * item.trx).toFixed(2)} - {item.trx}
        </p>
      )}
    </td>
    <td className="child_row">
      {item && (
        <p className="date_text">
          {new Date(item.date * 1000).toLocaleDateString()}
        </p>
      )}
    </td>
  </tr>
);

export default MyFinance;
