import "../../assets/styles/styles.scoped.css";
import React from "react";

import Decor2 from "../../assets/images/decor2.svg";
import ImgBlock from "../../assets/images/img_block.png";
import ImgBlock2 from "../../assets/images/img_block2.png";
import ImgBlock3 from "../../assets/images/img_block3.png";
import ImgBlock4 from "../../assets/images/img_block4.png";

function TiredBlock() {
  return (
    <section className="tired_block">
      <div className="tired_content">
        <p className="tired_title">Вам не надоело?</p>
        <img src={Decor2} alt="white-decor" className="white_decor" />
        <div
          className="tired_item wow fadeInLeft"
          data-wow-duration="0.8s"
          data-wow-delay="0.6s"
        >
          <img src={ImgBlock} alt="img_block" className="item_img" />
          <div className="item_content">
            <p className="item_title">Участвовать в матрицах</p>
            <img src={Decor2} alt="white-decor" className="white_item_decor" />
            <p className="item_description">
              Участвовать в матрицах, у которых стоимость уровня заставляет
              задуматься, что продать? И при этом половину дохода отдавать на
              покупку более дорогих уровней.
            </p>
          </div>
        </div>
        <div
          className="tired_item_two wow fadeInRight"
          data-wow-duration="0.8s"
          data-wow-delay="0.6s"
        >
          <div className="item_content_two">
            <p className="item_title">Терять партнеров</p>
            <img src={Decor2} alt="white-decor" className="white_item_decor" />
            <p className="item_description">
              От участия в изобилии разного рода проектов зачастую теряется
              самое ценное - это ваши партнеры. Ведь когда они в очередной раз
              разочаровываются – доверие вам теряется.
            </p>
          </div>
          <img src={ImgBlock2} alt="img_block" className="item_img" />
        </div>
        <div
          className="tired_item wow fadeInLeft"
          data-wow-duration="0.8s"
          data-wow-delay="0.6s"
        >
          <img src={ImgBlock3} alt="img_block" className="item_img" />
          <div className="item_content">
            <p className="item_title">Инвестировать</p>
            <img src={Decor2} alt="white-decor" className="white_item_decor" />
            <p className="item_description">
              Инвестировать в сомнительные проекты и надеяться не на то, что
              ваша инвестиция принесет вам прибыль, а на то, чтобы сайт
              проработал хотя бы месяц.
            </p>
          </div>
        </div>
        <div
          className="tired_item_two wow fadeInRight"
          data-wow-duration="0.8s"
          data-wow-delay="0.6s"
        >
          <div className="item_content_two">
            <p className="item_title">Продавать товары</p>
            <img src={Decor2} alt="white-decor" className="white_item_decor" />
            <p className="item_description">
              Навязывать людям товары, в которых они вовсе не нуждаются? А порой
              и самому сомневаться в том, что вы продаете, ведь желаемого
              результата вы не получили от продукта, а многие пишут отзывы о
              том, что получили побочный эффект.
            </p>
          </div>
          <img src={ImgBlock4} alt="img_block" className="item_img" />
        </div>
        <div className="tired_bottom_block">
          <p className="bottom_tired_title">
            УЗНАЛИ СЕБЯ В ЭТИХ СТРОКАХ?
            <br />
            ВСЕ ЭТИ ПУНКТЫ — ЗЛЕЙШИЕ ВРАГИ ВАШЕГО ДОХОДА
          </p>
        </div>
      </div>
    </section>
  );
}

export default TiredBlock;
