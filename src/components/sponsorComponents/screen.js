import '../../assets/styles/sponsor.scoped.css'

export default function Screen() {
    
    return(
    <div className="screen">
      <div className="content">
        <div className="top_block">
          <img src="assets/images/solution.svg" />
          <p className="title">Будьте на связи со спонсором</p>
        </div>
        <div className="block">
          <div className="img_block">
            <img src="assets/images/photo-user.jpg" className="img" />
          </div>
          <div className="information">
            <p className="username">Иван Иванов</p>
            <div className="contacts">
              <div className="contact_item">
                <p className="contact_item_text">Skype</p>
                <div className="contact_input_block">
                  <img src="assets/images/skype.svg" width={56} height={56} />
                  <input
                    type="text"
                    className="  contact_input"
                    defaultValue="@sanekk000"
                    readOnly
                  />
                </div>
              </div>
              <div className="contact_item">
                <p className="contact_item_text">Telegram</p>
                <div className="contact_input_block">
                  <img src="assets/images/telegram.svg" width={56} height={56} />
                  <input
                    type="text"
                    className="  contact_input"
                    defaultValue="strannik0004"
                    readOnly
                  />
                </div>
              </div>
              <div className="contact_item">
                <p className="contact_item_text">E-mail</p>
                <div className="contact_input_block">
                  <img src="assets/images/email.svg" width={56} height={56} />
                  <input
                    type="text"
                    className="  contact_input"
                    defaultValue="ivanivanov@mail.ru"
                    readOnly
                  />
                </div>
              </div>
              <div className="contact_item">
                <p className="contact_item_text">Whatsapp</p>
                <div className="contact_input_block">
                  <img src="assets/images/whatsapp.svg" width={56} height={56} />
                  <input
                    type="text"
                    className="  contact_input"
                    defaultValue={+380996938560}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }