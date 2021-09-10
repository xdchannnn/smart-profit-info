
import '../../assets/styles/styles.scoped.css'
import telegram from '../../assets/images/telegram.svg'
import contract from '../../assets/images/contract.svg'

function Footer() { 
    return(
        <footer>
        <div className="social_media">
            <a href="https://t.me/SmartProfit_RU" target="_blank" rel="noreferrer">
            <div className="telegram_block">
                <img src={telegram} alt="telegram" />
                <span>Smart-Profit_ru</span>
            </div>
            </a>
            <div className="contract_block">
            <img src={contract} alt="contract" />
            <span>Адрес контракта</span>
            </div>
        </div>
        <hr />
        <div className="copyright_block">
            <p className="copyright_text">Smart Profit Права защищены 2021 |</p>
            <a
            href="#"
            className="copyright_link"
            data-bs-toggle="modal"
            data-bs-target="#copyright_modal"
            >
            &nbsp;Правила и соглашения
            </a>
        </div>
        </footer>
    )
}

export default Footer;