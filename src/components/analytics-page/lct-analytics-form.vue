<template>
  <div class="lct-analytics-page">
    <div class="form">
      <a-form
        :model="formState"
        name="time_related_controls"
        v-bind="formItemLayout"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item name="flightDate" v-bind="config">
          <a-date-picker
            @change="updateFilters"
            v-model:value="formState.flightDate"
            value-format="YYYY-MM-DD"
            defaultPickerValue="2017-01-01"
            placeholder="Дата полета"
            :disabled-date="
              (date) => {
                const year = date.year();
                return year < 2017 || year > 2019;
              }
            "
          />
        </a-form-item>
        <a-form-item
          name="selectDirection"
          has-feedback
          :rules="[
            {
              required: true,
              message: 'Пожалуйста, выберите направление рейса',
            },
          ]"
        >
          <a-select
            v-model:value="formState.selectDirection"
            placeholder="Выберите направление рейса"
            @change="updateFilters"
          >
            <a-select-option v-for="item in DIRECTIONS.directions" :key="item">
              {{ item }}</a-select-option
            >
          </a-select>
        </a-form-item>
        <a-form-item
          name="selectBookingClass"
          has-feedback
          :rules="[
            {
              required: true,
              message: 'Пожалуйста, выберите класс бронирования!',
            },
          ]"
        >
          <a-select
            v-model:value="formState.selectBookingClass"
            placeholder="Выберите класс бронирования"
            @change="updateFilters"
          >
            <a-select-option
              v-for="item in BOOKING_CLASSES.booking_classes"
              :key="item"
            >
              {{ item }}</a-select-option
            >
          </a-select>
        </a-form-item>
        <a-form-item
          name="flightNumbers"
          has-feedback
          :rules="[
            { required: true, message: 'Пожалуйста, выберите номер рейса!' },
          ]"
        >
          <a-select
            v-model:value="formState.flightNumbers"
            placeholder="Выберите номер рейса"
            @change="updateFilters"
          >
            <a-select-option
              v-for="item in FLIGHT_NUMBERS.flight_numbers"
              :key="item"
            >
              {{ item }}</a-select-option
            >
          </a-select>
        </a-form-item>
        <a-form-item name="bookingStart">
          <a-date-picker
            @change="updateFilters"
            v-model:value="formState.bookingStart"
            value-format="YYYY-MM-DD"
            defaultPickerValue="2017-01-01"
            :disabled-date="
              (date) => {
                const year = date.year();
                return year < 2017 || year > 2019;
              }
            "
            class="ant-picker"
            placeholder="Начальная дата"
          />
        </a-form-item>
        <a-form-item name="bookingEnd">
          <a-date-picker
            @change="updateFilters"
            v-model:value="formState.bookingEnd"
            value-format="YYYY-MM-DD"
            defaultPickerValue="2017-01-01"
            placeholder="Конечная дата"
            :disabled-date="
              (date) => {
                const year = date.year();
                return year < 2017 || year > 2019;
              }
            "
          />
        </a-form-item>
      </a-form>
    </div>
    <router-link :to="{ name: 'analyticsPage' }">
      <a-button type="primary" class="btn">Назад</a-button>
    </router-link>

    <a-button type="primary" class="btn" @click="requestGraph()"
      >Проанализировать</a-button
    >
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "lct-analytics-page",
  data() {
    return {
      query: [],
    };
  },
  methods: {
    ...mapActions([
      "GET_DIRECTIONS_FROM_API",
      "GET_FLIGHT_NUMBERS_FROM_API",
      "GET_BOOKING_CLASSES_FROM_API",
      "GET_GRAPH_FROM_API",
    ]),
    requestGraph() {
      if (!this.GRAPH.length) {
        this.GET_GRAPH_FROM_API(this.query);
      }
    },
    updateFilters() {
      if (this.formState.selectDirection) {
        this.query.direction = this.formState.selectDirection;
        if (!this.FLIGHT_NUMBERS.length) {
          this.GET_FLIGHT_NUMBERS_FROM_API(this.query.direction);
        }
      }

      if (this.formState.flightDate) {
        this.query.flight_date = this.formState.flightDate;
      }

      if (this.formState.selectBookingClass) {
        this.query.booking_class = this.formState.selectBookingClass;
      }

      if (this.formState.bookingStart) {
        this.query.booking_start = this.formState.bookingStart;
      }

      if (this.formState.bookingEnd) {
        this.query.booking_end = this.formState.bookingEnd;
      }

      if (this.formState.flightNumbers) {
        this.query.flight_number = this.formState.flightNumbers;
      }
    },
  },
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
          message: "Пожалуйста, выберете дату полета!",
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
    };
  },
  computed: {
    ...mapGetters(["DIRECTIONS", "FLIGHT_NUMBERS", "BOOKING_CLASSES", "GRAPH"]),
  },

  mounted() {
    if (!this.DIRECTIONS.length) {
      this.GET_DIRECTIONS_FROM_API();
    }

    if (!this.BOOKING_CLASSES.length) {
      this.GET_BOOKING_CLASSES_FROM_API();
    }
  },
});
</script>

<style scoped>
.ant-picker {
  width: 100%;
}
.btn {
  margin-right: 30px;
  background: #02458d;
}
form {
  margin-left: 15rem;
}
</style>
