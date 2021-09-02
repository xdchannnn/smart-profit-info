import '../../assets/styles/general.scoped.css'

function GeneralTopBlock() {
    return(
    <div className="general_top_block">
      <div className="general_title_block">
        <img src="assets/images/general-team.svg" />
        <p className="general_title">Общая команда</p>
      </div>
      <div className="general_search_block">
        <input type="text" className="general_search_input" placeholder="Поиск" />
        <a href="#">
          <div className="search_button">
            <img src="assets/images/search-icon.svg" />
            <p>Поиск</p>
          </div>
        </a>
      </div>
    </div>
  )
  }
export default GeneralTopBlock;