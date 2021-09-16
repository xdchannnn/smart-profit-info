import '../../assets/styles/faq.scoped.css'

export default function FinanceQuestions() {
    return(
    <div id="FinanceQuestions" className="tabcontent">
      <div className="accordion" id="accordionExample2">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFifteen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFifteen"
              aria-expanded="false"
              aria-controls="collapseFifteen"
            >
              КАК МНЕ ПРОВЕРИТЬ СВОЙ БАЛАНС?
            </button>
          </h2>
          <div
            id="collapseFifteen"
            className="accordion-collapse collapse"
            aria-labelledby="headingFifteen"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              <p>
                Вы можете проверить статистику вашего баланса в любое время, войдя
                в свою учетную запись, но помните, это всего лишь статистика
                заработанных вами денег в нашей системе. Все средства
                автоматически отправляются на счета частников согласно условиям
                смарт-контракта.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSixteen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSixteen"
              aria-expanded="false"
              aria-controls="collapseSixteen"
            >
              ЕСТЬ ЛИ КОМИССИЯ ЗА УЧАСТИЕ В SMART PROFIT?
            </button>
          </h2>
          <div
            id="collapseSixteen"
            className="accordion-collapse collapse"
            aria-labelledby="headingSixteen"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              <p>
                Нет, в системе не предусмотрена комиссия. Участник оплачивает
                только комиссию в сети TRON во время активации учетной записи.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeventeen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeventeen"
              aria-expanded="false"
              aria-controls="collapseSeventeen"
            >
              КАК ПОПОЛНИТЬ КОШЕЛЕК TRON?
            </button>
          </h2>
          <div
            id="collapseSeventeen"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeventeen"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              <p>
                С помощью обменников (рекомендуем):
                <br />
                1) Зайдите на сайт{" "}
                <a href="https://bestchange.ru" target="_blank">
                  https://bestchange.ru
                </a>{" "}
                Это мониторинг проверенных обменников с самыми выгодными курсами
                обмена самых популярных платежных систем и банков большинства
                стран.
                <br />
                2) Выберите подходящую платежную систему, с которой вы хотите
                совершить обмен на TRON.
                <br />
                3) Выберите подходящий обменник с самым выгодным курсом.
                <br />
                4) Перейдите на сайт выбранного обменника и следуйте простой
                инструкции. Обмен как правило автоматический и совершается
                моментально.
                <br />
                5) Убедитесь, что на Ваш кошелек TRON поступили средства.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEighteen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEighteen"
              aria-expanded="false"
              aria-controls="collapseEighteen"
            >
              ПОЧЕМУ ТРАНЗАКЦИЯ МОЖЕТ БЫТЬ ОТКЛОНЕНА?
            </button>
          </h2>
          <div
            id="collapseEighteen"
            className="accordion-collapse collapse"
            aria-labelledby="headingEighteen"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              <p>
                Наиболее вероятная причина – это маленькое значение энергии.
                Увеличьте количество энергии в кошельке TRON.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNineteen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNineteen"
              aria-expanded="false"
              aria-controls="collapseNineteen"
            >
              У МЕНЯ ОСТАЛИСЬ ВОПРОСЫ, КУДА МНЕ ОБРАТИТЬСЯ?
            </button>
          </h2>
          <div
            id="collapseNineteen"
            className="accordion-collapse collapse"
            aria-labelledby="headingNineteen"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              <p>
                Если вы не нашли ответа на вопрос в списке часто задаваемых,
                напишите в службу поддержки.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }