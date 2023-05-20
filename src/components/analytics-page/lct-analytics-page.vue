<template>
  <h1>Выберите, что хотите проанализировать:</h1>

  <div class="lct-analytics-page">
    <div class="form">
      <a-form
        :model="formState"
        name="time_related_controls"
        v-bind="formItemLayout"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item name="range-picker" v-bind="rangeConfig">
          <a-range-picker
            v-model:value="formState['range-picker']"
            value-format="YYYY-MM-DD"
            class="dataPicker"
          />
        </a-form-item>
        <a-form-item
          name="selectType"
          has-feedback
          :rules="[{ required: true, message: 'Please select your country!' }]"
        >
          <a-select
            v-model:value="formState.selectType"
            placeholder="Выберите тип анализа"
          >
            <a-select-option value="dynamicsFlight"
              >Определение динамики бронирований рейса в разрезе классов
              бронирования по вылетевшим рейсам. (2017-2019
              год)</a-select-option
            >
            <a-select-option value="seasonalityDemand">
              Определение сезонности спроса по классам бронирования, по
              вылетевшим рейсам. (2017-2019 год)</a-select-option
            >
            <a-select-option value="determinationDemand">
              Определение профилей спроса в разрезе классов бронирования, по
              вылетевшим рейсам. (2017-2019 год)</a-select-option
            >
            <a-select-option value="forecastingDemand">
              Прогнозирование спроса в разрезе классов бронирования для
              продаваемых рейсов. (2017-2019 год)</a-select-option
            >
          </a-select>
        </a-form-item>
        <a-form-item
          name="selectDirection"
          has-feedback
          :rules="[{ required: true, message: 'Please select your country!' }]"
        >
          <a-select
            v-model:value="formState.selectDirection"
            placeholder="Выберите направление рейса"
          >
            <a-select-option
              value="forecastingDemand"
              v-for="item in DIRECTIONS.directions"
              :key="item"
            >
              {{ item }}</a-select-option
            >
          </a-select>
        </a-form-item>
        <a-form-item
          name="selectBookingClass"
          has-feedback
          :rules="[{ required: true, message: 'Please select your country!' }]"
        >
          <a-select
            v-model:value="formState.selectBookingClass"
            placeholder="Выберите класс бронирования"
          >
            <a-select-option
              value="forecastingDemand"
              v-for="item in BOOKING_CLASSES.booking_classes"
              :key="item"
            >
              {{ item }}</a-select-option
            >
          </a-select>
        </a-form-item>
        <!-- <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item> -->
      </a-form>
    </div>
    <router-link :to="{ name: 'determinationDemand' }">
      <button>Временная заглушка для просмотра примера графика</button>
    </router-link>
    <!-- <p>{{ FLIGHT_NUMBERS }}</p> -->
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { mapGetters, mapActions } from "vuex";
export default defineComponent({
  name: "lct-analytics-page",

  setup() {
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 8,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 16,
        },
      },
    };
    const config = {
      rules: [
        {
          type: "string",
          required: true,
          message: "Please select time!",
        },
      ],
    };
    const rangeConfig = {
      rules: [
        {
          type: "array",
          required: true,
          message: "Please select time!",
        },
      ],
    };
    const formState = reactive({
      "input-number": 3,
      "checkbox-group": ["A", "B"],
      rate: 3.5,
    });
    const onFinish = (values) => {
      console.log("Success:", values, formState);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
      formItemLayout,
      config,
      rangeConfig,
    };
  },
  computed: {
    ...mapGetters(["DIRECTIONS", "FLIGHT_NUMBERS", "BOOKING_CLASSES"]),
  },
  methods: {
    ...mapActions([
      "GET_DIRECTIONS_FROM_API",
      "GET_FLIGHT_NUMBERS_FROM_API",
      "GET_BOOKING_CLASSES_FROM_API",
    ]),
  },
  mounted() {
    if (!this.DIRECTIONS.length) {
      this.GET_DIRECTIONS_FROM_API();
    }
    if (!this.FLIGHT_NUMBERS.length) {
      this.GET_FLIGHT_NUMBERS_FROM_API();
    }
    if (!this.BOOKING_CLASSES.length) {
      this.GET_BOOKING_CLASSES_FROM_API();
    }
  },
});
</script>

<style scoped>
.dataPicker {
  width: 100%;
}
</style>
