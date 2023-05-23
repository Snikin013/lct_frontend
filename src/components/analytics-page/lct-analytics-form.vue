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
        <a-form-item name="bookingStart" v-bind="config">
          <a-date-picker
            @change="updateFilters"
            v-model:value="formState.bookingStart"
            value-format="YYYY-MM-DD"
            class="ant-picker"
            placeholder="Начальная дата"
          />
        </a-form-item>
        <a-form-item name="bookingEnd" v-bind="config">
          <a-date-picker
            @change="updateFilters"
            v-model:value="formState.bookingEnd"
            value-format="YYYY-MM-DD"
            placeholder="Конечная дата"
          />
        </a-form-item>
        <a-form-item name="flightDate" v-bind="config">
          <a-date-picker
            @change="updateFilters"
            v-model:value="formState.flightDate"
            value-format="YYYY-MM-DD"
            placeholder="Дата полета"
          />
        </a-form-item>
        <a-form-item
          name="selectDirection"
          has-feedback
          :rules="[{ required: true, message: 'Please select your country!' }]"
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
          :rules="[{ required: true, message: 'Please select your country!' }]"
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
          name="userRoute"
          has-feedback
          :rules="[{ required: true, message: 'Please select your country!' }]"
        >
          <a-select
            v-model:value="formState.userRoute"
            placeholder="Выберите маршрут пользователя"
            @change="updateFilters"
          >
            <a-select-option v-for="item in USER_ROUTE" :key="item">
              {{ item }}</a-select-option
            >
          </a-select>
        </a-form-item>
        <a-form-item
          name="flightNumbers"
          has-feedback
          :rules="[{ required: true, message: 'Please select your country!' }]"
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
      </a-form>
    </div>
    <router-link :to="{ name: 'analyticsPage' }">
      <a-button type="primary" class="btn">Назад</a-button>
    </router-link>

    <a-button type="primary" @click="requestGraph()">Проанализировать</a-button>
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
      }

      if (this.formState.userRoute) {
        this.query.user_route = this.formState.userRoute;
        if (
          !this.FLIGHT_NUMBERS.length &&
          this.query.direction &&
          this.query.user_route
        ) {
          this.GET_FLIGHT_NUMBERS_FROM_API([
            this.query.direction,
            this.query.user_route,
          ]);
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
    ...mapGetters([
      "DIRECTIONS",
      "FLIGHT_NUMBERS",
      "BOOKING_CLASSES",
      "GRAPH",
      "USER_ROUTE",
    ]),
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
}
form {
  margin-left: 15rem;
}
</style>
