import "../../assets/styles/finance.scoped.css"
import "../../assets/styles/general.scoped.css"

function MyFinance() {
    return(
    <div id="MyFinance" className="tabcontent">
      <table className="general_table">
        <tbody>
          <tr>
            <td className="main_row">
              <p>Номер транзакции</p>
            </td>
            <td className="main_row">
              <p>От кого</p>
            </td>
            <td className="main_row">
              <p>Уровень</p>
            </td>
            <td className="main_row">
              <p>TRX</p>
            </td>
            <td className="main_row">
              <p>Дата</p>
            </td>
            <td className="main_row">
              <p>Статус</p>
            </td>
          </tr>
          <tr className="child_one">
            <td className="child_row">
              <p>1500</p>
            </td>
            <td className="child_row">
              <p>
                <span className="green_text">FP:</span> ID 56908
              </p>
            </td>
            <td className="child_row">
              <p>Реферальный</p>
            </td>
            <td className="child_row">
              <p>3500</p>
            </td>
            <td className="child_row">
              <p className="date_text">02.07.2021</p>
            </td>
            <td className="child_row">
              <p className="success_text">Выполнен</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
  }

export default MyFinance;