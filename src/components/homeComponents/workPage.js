import '../../assets/styles/styles.scoped.css'
import decor from '../../assets/images/decor.png'

const workPage = () => (
    <section className="work_page">
      <div className="work_content">
        <p className="work_title">ВАШ УСПЕХ НАЧИНАЕТСЯ С СИСТЕМЫ</p>
        <p className="work_title_two">
          ЕСЛИ ВЫ НАЧИНАЕТЕ С ХОРОШЕЙ СИСТЕМЫ,ВАШИ ШАНСЫ НА УСПЕХ БУДУТ ВЕЛИКИ -
          ЕСЛИ ВЫ НАЧНЕТЕ С ПЛОХОЙ СИСТЕМЫ, ВЫ ПОЛУЧИТЕ ТОЛЬКО ПЛОХИЕ РЕЗУЛЬТАТЫ.
        </p>
        <img src={decor} alt="decor-icon" />
        <p className="work_text">
          SMART PROFIT - это не имеющее аналогов международное Краудфандинговое
          сообщество, объединяющее целеустремленных и любящих свободу людей со
          всего мира. Стать участником SMART PROFIT может абсолютно каждый
          человек, всего лишь активировав позицию в системе, и тем самым помочь
          другим участникам достигнуть своей цели как можно скорее. В замен уже
          для вас открывается возможность получать помощь от участников системы,
          но уже на реализацию своих целей. Каждый участник системы - это отдельно
          взятая цель и у всех она разная. Система SMART PROFIT - это глобальный
          инструмент, которым максимально просто пользоваться для достижения ваших
          целей в кратчайшие сроки.
        </p>
        <div className="work_video_block">
          <iframe
            width={750}
            height={450}
            src="https://www.youtube.com/embed/covxjhXsCi8"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )

export default workPage;