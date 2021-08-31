import '../../assets/styles/styles.scoped.css'
import decor from "../../assets/images/decor.png";
import edit from "../../assets/images/edit.svg";
import partner from "../../assets/images/partner.svg";
import support from "../../assets/images/support.svg"
import settings from "../../assets/images/settings.svg";
import bonus from "../../assets/images/bonus.svg";
import medal from "../../assets/images/medal.svg";


function StartBlock() { 
    return(
        <section className="start_block">
        <div className="start_content">
            <p className="start_title">С чего начать</p>
            <img src={decor} alt="decor" />
            <div className="start_items_block">
            <div className="items_one_row">
                <div className="start_one_item">
                <div className="item_icon">
                    <img src={edit} alt="edit" />
                </div>
                <p className="start_item_title">Зарегистрируйтесь</p>
                <p className="start_item_description">
                    Зарегистрируйтесь в Smart Profit и активируйте свою позицию с
                    помощью кошелька TRX, выбрав один из статусов, который вам больше
                    всего подходит.
                </p>
                </div>
                <div className="start_two_item">
                <div className="item_icon">
                    <img src={partner} alt="edit" />
                </div>
                <p className="start_item_title">Расскажите друзьям</p>
                <p className="start_item_description">
                    Расскажите о системе Smart Profit как можно большему количеству
                    своих друзей и знакомых. Это даст вам 25% дохода от активации их
                    позиций.
                </p>
                </div>
                <div className="start_three_item">
                <div className="item_icon">
                    <img src={support} alt="edit" />
                </div>
                <p className="start_item_title">Поддерживайте партнеров </p>
                <p className="start_item_description">
                    Помогите вашим партнерам так же рассказать об этой возможности.
                </p>
                </div>
            </div>
            <div className="items_one_row">
                <div className="start_four_item">
                <div className="item_icon">
                    <img src={settings} alt="edit" />
                </div>
                <p className="start_item_title">Возьмите от системы максимум</p>
                <p className="start_item_description">
                    Достигайте статусов сами и помогайте своим партнерам - это
                    позволит вам максимально получать доход от системы.
                </p>
                </div>
                <div className="start_five_item">
                <div className="item_icon">
                    <img src={bonus} alt="edit" />
                </div>
                <p className="start_item_title">Получайте бонусы</p>
                <p className="start_item_description">
                    Достигните максимального статуса и получайте бонус от оборота всей
                    системы.
                </p>
                </div>
                <div className="start_six_item">
                <div className="item_icon">
                    <img src={medal} alt="edit" />
                </div>
                <p className="start_item_title">Следите за своей позицией</p>
                <p className="start_item_description">
                    Не забывайте вовремя активировать свою позицию, чтобы не
                    пропускать доход и не потерять место в системе.
                </p>
                </div>
            </div>
            </div>
            <div className="over_block">
            <a href="https://smart-profit.info/join.php" className="over_button">
                Примите участие
            </a>
            </div>
        </div>
        </section>
  )
}

export default StartBlock;