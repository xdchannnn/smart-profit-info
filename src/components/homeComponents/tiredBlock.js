import decor2 from '../../assets/images/decor2.svg'
import img_block from '../../assets/images/img_block.png'
import img_block2 from '../../assets/images/img_block2.png'
import img_block3 from '../../assets/images/img_block3.png'
import img_block4 from '../../assets/images/img_block4.png'
import '../../assets/styles/styles.scoped.css'
import React from 'react';
import { Fade } from "react-awesome-reveal";

function TiredBlock() {
    return (
    <section className="tired_block">
      <div className="tired_content">
        <p className="tired_title">Вам не надоело?</p>
        <img
          src={decor2}
          alt="white-decor"
          className="white_decor"
        />
        <div className="one_items_row">
        <Fade direction="left">
          <div
            className="tired_item"
          >
            <img
              src={img_block}
              alt="img_block"
              className="item_img"
            />
            <div className="item_content">
              <p className="item_title">Участвовать в матрицах</p>
              <img
                src={decor2}
                alt="white-decor"
                className="white_item_decor"
              />
              <p className="item_description">
                Участвовать в матрицах, у которых стоимость уровня заставляет
                задуматься, что продать? И при этом половину дохода отдавать на
                покупку более дорогих уровней.
              </p>
            </div>
          </div>
        </Fade>
        
        <Fade direction="right">
          <div
            className="tired_item_two"
            
          >
            <div className="item_content_two">
              <p className="item_title">Терять партнеров</p>
              <img
                src={decor2}
                alt="white-decor"
                className="white_item_decor"
              />
              <p className="item_description">
                От участия в изобилии разного рода проектов зачастую теряется самое
                ценное - это ваши партнеры. Ведь когда они в очередной раз
                разочаровываются – доверие вам теряется.
              </p>
            </div>
            <img
              src={img_block2}
              alt="img_block"
              className="item_img"
            />
          </div>
        </Fade>
        </div>
        
        <Fade direction="left">
          <div
            className="tired_item"
          >
            <img
              src={img_block3}
              alt="img_block"
              className="item_img"
            />
            <div className="item_content">
              <p className="item_title">Инвестировать</p>
              <img
                src={decor2}
                alt="white-decor"
                className="white_item_decor"
              />
              <p className="item_description">
                Инвестировать в сомнительные проекты и надеяться не на то, что ваша
                инвестиция принесет вам прибыль, а на то, чтобы сайт проработал хотя
                бы месяц.
              </p>
            </div>
          </div>
        </Fade>
        
        <Fade direction="right">
        <div
          className="tired_item_two"
        >
          <div className="item_content_two">
            <p className="item_title">Продавать товары</p>
            <img
              src={decor2}
              alt="white-decor"
              className="white_item_decor"
            />
            <p className="item_description">
              Навязывать людям товары, в которых они вовсе не нуждаются? А порой и
              самому сомневаться в том, что вы продаете, ведь желаемого результата
              вы не получили от продукта, а многие пишут отзывы о том, что
              получили побочный эффект.
            </p>
          </div>
          <img
            src={img_block4}
            alt="img_block"
            className="item_img"
          />
        </div>
        </Fade>
        
        <div className="tired_bottom_block">
          <p className="bottom_tired_title">
            УЗНАЛИ СЕБЯ В ЭТИХ СТРОКАХ?
            <br />
            ВСЕ ЭТИ ПУНКТЫ — ЗЛЕЙШИЕ ВРАГИ ВАШЕГО ДОХОДА
          </p>
        </div>
      </div>
    </section>
    )}
  
export default TiredBlock;