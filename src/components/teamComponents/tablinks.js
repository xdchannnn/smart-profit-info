import '../../assets/styles/my-team.scoped.css'

function Tablinks(props) {
    return(
    <div className="tab">
      <button className={props.tab === "New" ? "tablinks active" : "tablinks"} onClick={() => props.setTab("New")}>
        Новые регистрации
      </button>
      <button className={props.tab === "Expired" ? "tablinks active" : "tablinks"} onClick={() => props.setTab("Expired")}>
        Просроченные партнеры
      </button>
      <button
        className={props.tab === "Paid" ? "tablinks active" : "tablinks"}
        onClick={() => props.setTab("Paid")}
      >
        Оплаченные партнеры
      </button>
    </div>
  )
}

export default Tablinks;