import '../../assets/styles/dashboard.scoped.css'

function Modals() {
    return (
    <>
      <div
        className="modal fade"
        id="computer_modal"
        tabIndex={-1}
        aria-labelledby="computer_modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal_header">
              <h5 className="modal-title" id="computer_modalLabel">
                С компьютера
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <img src="assets/images/main.jpg" className="modal_img" />
              <img src="assets/images/main.jpg" className="modal_img" />
              <img src="assets/images/main.jpg" className="modal_img" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="mobile_modal"
        tabIndex={-1}
        aria-labelledby="mobile_modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal_header">
              <h5 className="modal-title" id="mobile_modalLabel">
                С мобильного
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <img src="assets/images/main.jpg" className="modal_img" />
              <img src="assets/images/main.jpg" className="modal_img" />
              <img src="assets/images/main.jpg" className="modal_img" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="hand_modal"
        tabIndex={-1}
        aria-labelledby="hand_modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal_header">
              <h5 className="modal-title" id="hand_modalLabel">
                Вручную
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <img src="assets/images/main.jpg" className="modal_img" />
              <img src="assets/images/main.jpg" className="modal_img" />
              <img src="assets/images/main.jpg" className="modal_img" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modals;