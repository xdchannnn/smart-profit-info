import '../../assets/styles/activation.scoped.css'


function SystemBlock() {
    return(
    <div className="system_block">
      <div className="border_start_amount_blue" />
      <div className="border_end_amount_blue" />
      <div className="system_content">
        <p className="system_title">Инструкция по регистрации</p>
        <div className="system_buttons_group">
          <p>
            <button
              className="system_button"
              data-bs-toggle="modal"
              data-bs-target="#computer_modal"
            >
              С компьютера
            </button>
          </p>
          <p>
            <button
              className="system_button"
              data-bs-toggle="modal"
              data-bs-target="#mobile_modal"
            >
              С мобильного
            </button>
          </p>
          <p>
            <button
              className="system_button"
              data-bs-toggle="modal"
              data-bs-target="#hand_modal"
            >
              Вручную
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
export default SystemBlock;