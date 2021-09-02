import '../../assets/styles/general.scoped.css'

function ButtonsBlock() {
    return(
        <div className="buttons_block">
        <button
            className="prev_button"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
        >
            <img src="assets/images/right-arrow.svg" className="right_icon" />
            <span>Предыдущая</span>
        </button>
        <p className="table_page_indicator">1/20</p>
        <button
            className="next_button"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
        >
            <span>Следующая</span>
            <img src="assets/images/left-arrow.svg" className="left_icon" />
        </button>
        </div>
  )
  }
export default ButtonsBlock;