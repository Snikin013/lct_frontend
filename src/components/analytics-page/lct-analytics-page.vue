<template>
  <div class="lct-analytics-page">
    <h2>
      Определение динамики бронирований рейса в разрезе классов бронирования по
      вылетевшим рейсам. (2017-2019 год)
    </h2>
    <div class="lct-analytics-page-info">
      <div class="wrapper">
        <img
          src="../../assets/analytics-type/1.jpg"
          alt="Определение динамики бронирований"
          class="icon"
        />
      </div>
      <div class="wrapper info">
        <p>
          Реализован автоматизированный процесс расчета динамики бронирования по
          каждому пролетевшему рейсу в разрезе каждого класса. Результаты
          динамики бронирования представлены в виде графиков (линейные или
          гистограммы), есть возможность управления периодом просмотра динамики
          бронирования. Период для динамики бронирования 2017 – 2019 год
        </p>
        <router-link :to="{ name: 'dynamicsFlight' }">
          <a-button type="primary" class="btn">Проанализировать</a-button>
        </router-link>
      </div>
    </div>
    <hr />
    <h2>
      Определение сезонности спроса по классам бронирования, по вылетевшим
      рейсам. (2017-2019 год)
    </h2>
    <div class="lct-analytics-page-info">
      <div class="wrapper">
        <img
          src="../../assets/analytics-type/2.jpg"
          alt="Определение сезонности спроса"
          class="icon"
        />
      </div>
      <div class="wrapper info">
        <p>
          Реализован автоматизированный процесс расчета сезонности спроса
          бронирования по каждому пролетевшему рейсу в разрезе каждого класса.
          Результаты сезонности представлены в виде графиков (линейные или
          гистограммы). Реализована возможность управлять периодом просмотра
          сезонности бронирования. Период для сезонности бронирования 2017 –
          2019 год.
        </p>
        <router-link :to="{ name: 'seasonalityDemand' }">
          <a-button type="primary" class="btn">Проанализировать</a-button>
        </router-link>
      </div>
    </div>
    <hr />
    <h2>
      Определение профилей спроса в разрезе классов бронирования, по вылетевшим
      рейсам. (2017-2019 год)
    </h2>
    <p>
      Определяет профиль спроса в зависимости от глубины прогнозирования для
      разных сегментированных пассажиров. Реализован автоматизированный процесс
      расчета профиля спроса в зависимости от глубины прогнозирования
      бронирования по каждому пролетевшему рейсу в разрезе каждого класса.
      Результаты профиля спроса представлены в виде графиков (линейные или
      гистограммы). Период бронирования 2017 – 2019 год
    </p>
    <div class="lct-analytics-page-info">
      <div class="wrapper">
        <img
          src="../../assets/analytics-type/3.jpg"
          alt="Определение профилей спроса в разрезе классов бронирования"
          class="icon"
        />
      </div>
      <div class="wrapper info">
        <ul>
          Реализованы возможности:
          <li>наложения графиков от различных профилей;</li>
          <li>
            спроса просмотра смешанного профиля спроса управления периодом;
          </li>
          <li>просмотра профиля спроса бронирования.</li>
        </ul>
        <router-link :to="{ name: 'determinationDemand' }">
          <a-button type="primary" class="btn">Проанализировать</a-button>
        </router-link>
      </div>
    </div>
    <hr />
    <h2>
      Прогнозирование спроса в разрезе классов бронирования для продаваемых
      рейсов. (2017-2019 год)
    </h2>
    <p>
      Реализован автоматизированный процесс расчета прогнозного спроса
      бронирования по каждому продаваемому рейсу в разрезе каждого класса.
      Прогноз спроса рассчитывается для различной глубины прогнозирования
      спроса. Результаты представлены в виде графиков (линейные или
      гистограммы). Добавлена возможность управлять периодом просмотра прогноза
      спроса бронирования.
    </p>
    <div class="lct-analytics-page-info">
      <div class="wrapper">
        <img src="../../assets/analytics-type/4.jpg" alt="ICON" class="icon" />
      </div>
      <div class="wrapper info">
        <ul>
          <li>
            Период для прогнозного расчета спроса бронирования 2018 -2019 год
            для возможности проверки прогнозов по фактическим параметрам
            бронирований их истории бронирования (из исторических файлов).
          </li>
          <li>
            Период для прогнозного расчета спроса бронирования расписание 2020
            года, с последующей возможностью проверки прогнозов спроса
            экспертами путем сверки с фактическим показателями бронирований из
            фактической истории бронирования за 2020 год.
          </li>
        </ul>
        <router-link :to="{ name: 'forecastingDemand' }">
          <a-button type="primary" class="btn">Проанализировать</a-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "lct-analytics-page",
});
</script>

<style scoped lang="scss">
h2 {
  font-size: 2rem;
  margin-top: 40px;
}

p {
  position: relative;
  width: 100%;
  min-height: 1px;
  font-size: 1rem;
  padding-right: 30px;
  padding-left: 30px;
  text-align: left;
}

.lct-analytics-page-info {
  display: flex;
  .btn {
    border-radius: 10px;
    background-color: #02458d;
    border-color: #02458d;

    &-revert {
      border-radius: 10px;
      background: white;
      color: #02458d;
      border-color: white;
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
  }

  .info {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  ul {
    list-style: none;
    border-left: 10px solid #02458d;
    padding: 0;
    margin-left: 30px;
    font-size: 1rem;

    li {
      padding: 10px;
    }

    li:nth-child(odd) {
      background: #e1f1ff;
    }

    li:nth-child(even) {
      background: white;
    }
  }
}

@media (max-width: 1000px) {
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .wrapper {
    width: 100%;
  }
  .lct-analytics-page-info {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 400px;
  }
}
</style>
