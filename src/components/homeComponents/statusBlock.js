import decor from '../../assets/images/decor.png'
import '../../assets/styles/styles.scoped.css'

function StatusBlock() {
    return(
        <section className="status_block">
        <div className="status_content">
            <p className="status_title">СТАТУСЫ И ВОЗМОЖНОСТИ</p>
            <img src={decor} alt="decor-icon" />
            <div className="cards_group">
            <div className="status_card">
                <div className="border_decor_blue position-absolute top-0 end-0" />
                <div className="status_card_content">
                <p className="card_title_blue">Start Profit</p>
                <p className="card_description_blue">
                    Активируете позицию на 60 дней, и получаете доход с 3 уровней. За
                    это время вы можете достичь более высоких статусов, и открыть для
                    себя новые уровни. Более высокие статусы присваиваются навсегда.
                </p>
                </div>
                <p className="card_price_blue">30$ BNB</p>
                <div className="border_decor_bottom_blue" />
            </div>
            <div className="status_yellow_card">
                <div className="border_decor_yellow position-absolute top-0 end-0" />
                <div className="status_card_content">
                <p className="card_title_yellow">Maxi Profit</p>
                <p className="card_description_blue">
                    Активируете позицию на 360 дней, и получаете доход уже с 7
                    уровней. За это время вам нужно пригласить 5 друзей, и помочь им
                    сделать тоже самое, в свою очередь вы фактически подтверждаете
                    статус «MAXI PROFIT» навсегда. По мимо этого вы так же участвуете
                    в распределении бонуса «MAXI BONUS» - это 10% от оборота всего
                    проекта.
                </p>
                </div>
                <p className="card_price_yellow">180$ BNB</p>
                <div className="border_decor_bottom_yellow" />
            </div>
            <div className="status_card">
                <div className="border_decor_green position-absolute top-0 end-0" />
                <div className="status_card_content">
                <p className="card_title_green">Fixed Profit</p>
                <p className="card_description_blue">
                    Активируете позицию на 180 дней, и получаете доход уже с 5
                    уровней. За это время вам нужно пригласить 5 друзей, и подтвердить
                    статус фактически ,статус «FIXED PROFIT» присваивается
                    <br /> навсегда.
                </p>
                </div>
                <p className="card_price_blue">90$ BNB</p>
                <div className="border_decor_bottom_green" />
            </div>
            </div>
            <div className="over_block">
            <a href="https://smart-profit.info/join.php" className="over_button">
                Присоединиться
            </a>
            </div>
        </div>
        </section>
    )
}

export default StatusBlock;

