import "../../assets/styles/finance.scoped.css"

function FinanceTablinks(props) {
    return(
    <>
      <div className="general_top_block">
        <div className="general_title_block">
          <img src="assets/images/finance.svg" />
          <p className="general_title">Доход и упущенный доход</p>
        </div>
      </div>
      <div className="tab">
        <button
            className={props.tab === "MyFinance" ? "tablinks active" : "tablinks"} 
            onClick={() => props.setTab("MyFinance")}
        >
          Мой доход
        </button>
        <button className={props.tab === "LostFinance" ? "tablinks active" : "tablinks"} 
            onClick={() => props.setTab("LostFinance")}>
          Упущенный доход
        </button>
      </div>
    </>
  )
  }
export default FinanceTablinks;