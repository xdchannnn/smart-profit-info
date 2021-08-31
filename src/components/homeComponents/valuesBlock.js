import '../../assets/styles/styles.scoped.css'

const valuesBlock = () => (
    <section className="values_block">
      <div className="values_content">
        <p className="values_title">ценности Smart Profit</p>
        <img src="assets/images/yellow-decor.svg" alt="yellow-decor" />
        <div className="form_content">
          <div className="one_row">
            <div className="value_item">
              <img
                src="assets/images/help-icon.svg"
                alt="help-icon"
                className="help-icon"
              />
              <p className="value_title">Точечный перелив</p>
              <p className="value_description">
                Вы всегда можете помочь своим менее активным участникам в развитии
                команды и получении дохода, используя точечный перелив, при этом
                не теряя реферальной связи и реферального вознаграждения.
              </p>
            </div>
          </div>
          <div className="two_row">
            <div className="value_item">
              <img
                src="assets/images/people-icon.svg"
                alt="people-icon"
                className="help-icon"
              />
              <p className="value_title">Доступно каждому</p>
              <p className="value_description">
                Участие составляет всего 500 TRX и, оплачивая более высокие
                статусы, вы получаете дополнительные возможности от системы и
                увеличиваете длительность активности вашей позиции, но не
                переплачиваете.
              </p>
            </div>
            <div className="form_logo_block" />
            <div className="value_item">
              <img
                src="assets/images/structure-icon.svg"
                alt="structure-icon"
                className="help-icon"
              />
              <p className="value_title">Глобальная структура</p>
              <p className="value_description">
                Принимая участие в SMART PROFIT, вы занимаете место в глобальной
                структуре, в которой находятся участники со всего мира, а это
                значит, что ваша команда будет расти в геометрической прогрессии и
                ваш доход - соответственно.
              </p>
            </div>
          </div>
          <div className="three_row">
            <div className="value_item">
              <img
                src="assets/images/money-icon.svg"
                alt="help-icon"
                className="net-icon"
              />
              <p className="value_title">100 % Сеть</p>
              <p className="value_description">
                Автоматическое распределение всех денег между счетами участников.
              </p>
            </div>
            <div className="value_item">
              <img
                src="assets/images/security-icon.svg"
                alt="help-icon"
                className="net-icon"
              />
              <p className="value_title">Безопастность</p>
              <p className="value_description">
                Никто не может повлиять на работу и алгоритм смарт-контракта SMART
                PROFIT, его не возможно ни удалить, ни изменить.
              </p>
            </div>
          </div>
          <div className="values_bottom_block">
            <p className="bottom_block_title">
              именно это будет способствовать вашему успеху и поможет вам обрести
              финансовую независимость!
            </p>
          </div>
        </div>
      </div>
    </section>
  )

export default valuesBlock;