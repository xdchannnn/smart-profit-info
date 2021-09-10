import '../../assets/styles/styles.scoped.css'
import decor2 from '../../assets/images/decor2.svg';
import table from '../../assets/images/RU.svg';

function TableBlock(){  
    
    return(
        <section className="table_block">
        <div className="table_content">
            <p className="table_title">Таблица ваших доходов</p>
            <img src={decor2} alt="decor" />
            <div className="table-responsive">
            <div className="score_block">
                <img
                src={table}
                alt="table-icon"
                className="table_img_block"
                />
            </div>
            </div>
            <p className="table_title">
            ИЗМЕНИ СВОЮ ЖИЗНЬ ИМЕЯ ВСЕГО 30$ В КАРМАНЕ
            </p>
        </div>
        </section>
  )
}

export default TableBlock;