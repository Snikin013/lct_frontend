<template>
  <div class="lct-main-page">
    <section class="lct-main-page__predict">
      <div class="lct-main-page__predict-info">
        <h3>
          РЕКОМЕНДАТЕЛЬНЫЙ СЕРВИС ДИНАМИЧЕСКОГО ПРОГНОЗИРОВАНИЯ СПРОСА НА
          АВИАРЕЙСЫ
        </h3>
        <p>
          Сервис для прогнозирования спроса на авиарейсы, учитывающий динамику
          бронирования, сезонность и внешние факторы. Система управления
          доходами предназначена для увеличения доходов авиакомпании от продажи
          услуг пассажирских перевозок с использованием технологии определения
          оптимальных объемов продаж по классам бронирования
        </p>
      </div>
      <div class="lct-main-page__predict-photos">
        <div class="outer">
          <img
            src="../../assets/main-page/plane.jpg"
            alt="Авиакомпания"
            class="img"
          />
          <img
            src="../../assets/main-page/column.jpg"
            alt="Аналитика авиарейсов"
            class="img inner inner-bs"
          />
        </div>
      </div>
    </section>
    <section class="lct-main-page__predict">
      <div
        class="lct-main-page__predict-photos lct-main-page__predict-photos-last"
      >
        <div class="outer">
          <img
            src="../../assets/main-page/airplane.jpg"
            alt="Купить билет на самолет"
            class="img"
          />
          <img
            src="../../assets/main-page/chart.jpg"
            alt="Аналитика покупки билетов авиаресов"
            class="img inner-left inner-bs"
          />
        </div>
      </div>
      <div class="lct-main-page__predict-info">
        <h1>Решает следующие задачи:</h1>
        <ul>
          <li>
            Определение динамики бронирований рейса в разрезе классов
            бронирования по вылетевшим рейсам;
          </li>
          <li>
            Определение сезонности спроса по классам бронирования, по вылетевшим
            рейсам;
          </li>
          <li>
            Определение профилей спроса в разрезе классов бронирования, по
            вылетевшим рейсам;
          </li>
          <li>
            Прогнозирование спроса в разрезе классов бронирования для
            продаваемых рейсов.
          </li>
        </ul>
        <router-link :to="{ name: 'analyticsPage' }">
          <a-button type="primary" class="btn btn-analytic"
            >Динамика бронирования</a-button
          >
        </router-link>
      </div>
    </section>
    <section class="lct-info">
      <div class="service-info">
        <div>
          <h1 class="service-info-header">АКТУАЛЬНОСТЬ ЗАДАЧИ</h1>
          <p>
            Автоматизированный автоматический процесс прогнозирования спроса
            авиаперевозки в разрезе классов бронирования должен увеличить
            эффективность процесса управления оптимизацией ценообразования
            услуги авиационной перевозки. Процесс прогнозирования спроса
            является составной частью целевого процесса управления доходами
            авиакомпании от оказания услуг авиаперевозок. Процесс
            прогнозирования спроса авиаперевозки входит составной частью в
            систему управления доходами.
          </p>
        </div>
      </div>
      <div class="service-analytics inner-bs">
        <p class="service-analytics-header">
          Система управления доходами предназначена для увеличения доходов
          авиакомпании от продажи услуг пассажирских перевозок с использованием
          технологии определения оптимальных объемов продаж по классам
          бронирования
        </p>
      </div>
    </section>
    <section class="lct-main-page__predict lct-last-section">
      <div class="lct-main-page__predict-info">
        <h1>Преимущества сервиса:</h1>
        <ul>
          <li>
            Увеличение точности прогнозирования спроса на авиарейсы, что
            позволяет более эффективно управлять заполненностью рейсов и
            оптимизировать расписание полетов;
          </li>
          <li>
            Снижение затрат на маркетинг и рекламу благодаря более точной оценке
            потребностей клиентов;
          </li>
          <li>
            Предоставление возможности быстро адаптироваться к изменениям в
            спросе, таким как сезонные колебания или неожиданные события
            (например, пандемия).
          </li>
        </ul>
        <router-link :to="{ name: 'analyticsPage' }">
          <a-button type="primary" class="btn btn-analytic"
            >Динамика бронирования</a-button
          >
        </router-link>
      </div>
      <div class="lct-main-page__predict-photos">
        <div class="outer">
          <img
            src="../../assets/main-page/windowPlane.jpg"
            alt="Купить билет на самолет"
            class="img"
          />
        </div>
      </div>
    </section>

    <img
      class="finish-img"
      src="../../assets/main-page/plane-large.svg"
      alt="Самолеты Аэрофлот"
    />
  </div>
</template>

<script>
export default {
  name: "lct-main-page",
};
</script>

<style scoped lang="scss">
.lct-info {
  display: flex;
  flex-direction: column;
}

.inner-bs {
  box-shadow: 0px 15px 15px 3px rgba(0, 0, 0, 0.3);
}

section {
  margin-top: 100px;
  margin-bottom: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .outer {
    position: relative;
  }

  .img {
    width: 400px;
    border-radius: 50px;
  }

  .inner {
    position: absolute;
    top: 250px;
    right: 250px;
    width: 250px;
    height: 250px;

    &-left {
      position: absolute;
      top: 250px;
      left: 250px;
      width: 250px;
      height: 250px;
    }
  }

  .service-info {
    display: flex;
    border-radius: 30px;
    background: #02458d;
    color: white;
    padding: 50px 180px 250px 200px;
    font-size: 30px;
    text-align: left;

    &-header {
      color: white;
      font-size: 60px;
    }
  }

  .service-analytics {
    padding: 40px 80px;
    border-radius: 30px;
    border: 4px solid white;
    background: #f6f8fe;
    margin: -210px 100px 50px 100px;

    &-header {
      font-size: 22px;
      text-align: left;
      color: #02458d;
      line-height: 1;
      margin: 0;
    }
  }
}

h1 {
  font-size: 40px;
  margin-bottom: 10px;
  text-align: left;
}

h2 {
  font-size: 30px;
}

h3 {
  font-size: 24px;
}

p {
  font-size: 18px;
  margin-bottom: 6px 0;
}

ul {
  margin-top: 20px;
  padding-left: 16px;
}
li {
  font-size: 18px;
  margin: 6px 0;
}

section:first-child {
  margin-top: 30px;
}

section.lct-info {
  margin-bottom: 30px;
}

section.lct-main-page__predict {
  margin-top: 30px;
}

section.lct-last {
  margin-bottom: 150px;
  margin-top: 100px;

  h2 {
    font-size: 30px;
  }
}

.lct-main-page {
  &__predict {
    &-info {
      max-width: 470px;
      text-align: left;
    }
  }
}

section.lct-last-section {
  margin-top: 100px;
  margin-bottom: 100px;
}

.btn {
  border-radius: 10px;
  background-color: #02458d;
  border-color: #02458d;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.3);
  margin-top: 25px;
  margin-left: 15px;
}

.btn-revert {
  border-radius: 10px;
  background: white;
  color: #02458d;
  border-color: white;
  border: 1px solid #02458d;
}

.btn-analytic {
  display: flex;
  align-items: center;
  padding: 30px 36px;
  font-size: 24px;
}
ul {
  list-style: none;
  border-left: 10px solid #02458d;
  padding: 0;
  font-size: 1rem;
  font-size: 20px;
  text-align: left;

  h4 {
    margin-bottom: 0;
    padding-left: 10px;
  }

  li {
    padding: 10px;
    text-align: left;
    font-size: 16px;
  }
}

@media (max-width: 1000px) {
  section {
    display: flex;
    flex-direction: column;
    margin: 0 30px;

    .service-info {
      max-width: 350px;
      padding: 25px 36px 25px 25px;
      font-size: 12px;
      &-header {
        font-size: 20px;
      }
    }

    .img {
      width: 350px;
    }
  }

  .lct-main-page__predict-photos {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .lct-main-page__predict-photos-last {
    margin-top: 0;
  }

  #triangle-right {
    display: none;
  }

  .inner-bs {
    display: none;
  }

  .finish-img {
    max-width: 350px;
  }

  section.lct-last {
    margin-bottom: 40px;
  }

  .btn {
    margin-bottom: 20px;
  }
}
</style>
