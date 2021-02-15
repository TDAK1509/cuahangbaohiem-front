<template>
  <div>
    <div v-if="!isSuccess">
      <p>
        Vui lòng điền thông tin liên lạc của bạn, chúng tôi sẽ liên lạc với bạn
        để tư vấn mua gói bảo hiểm bạn đã chọn.
      </p>

      <form
        class="mt-4"
        name="car_insurance"
        @submit.prevent="submit"
        @keydown.esc="onEscPress"
      >
        <TextField
          ref="name"
          v-model="name"
          data-cy="name"
          label="Tên của bạn"
          pattern="^[a-zA-Z\s]*$"
          required
        />

        <TextField
          v-model="email"
          data-cy="email"
          label="Email của bạn"
          type="email"
          name="email"
          required
        />

        <TextField
          v-model="phone"
          data-cy="phone"
          label="Số điện thoại của bạn"
          type="tel"
          name="phone"
          pattern="^[0-9]*$"
          required
        />

        <div class="field">
          <label class="label">Lời nhắn của bạn</label>
          <div class="control">
            <textarea
              v-model="note"
              data-cy="note"
              class="textarea"
              name="note"
            ></textarea>
          </div>
        </div>

        <p v-if="isError" class="has-text-danger">
          Đã có lỗi xảy ra, vui lòng thử lại sau.
        </p>

        <div class="field mt-4">
          <div class="control">
            <button
              data-cy="popup-buy-button"
              class="button is-info"
              :class="{ 'is-loading': loading }"
            >
              XÁC NHẬN
            </button>
          </div>
        </div>
      </form>
    </div>

    <p v-else>
      Cám ơn bạn đã lựa chọn dịch vụ của chúng tôi. Chúng tôi sẽ liên lạc với
      bạn trong thời gian sớm nhất!
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BuyPopupForm",

  props: {
    insuranceCompany: {
      type: String,
      required: true
    },

    insuranceValue: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      name: "",
      email: "",
      phone: "",
      note: "",
      loading: false,
      isSuccess: false,
      isError: false
    };
  },

  mounted() {
    this.focusOnNameTextField();
  },

  methods: {
    async submit() {
      this.loading = true;
      this.isError = false;

      try {
        await this.saveRequestToServer();
        this.alertSuccess();
      } catch (error) {
        this.isError = true;
      } finally {
        this.loading = false;
      }
    },

    saveRequestToServer() {
      this.updateRequesInformationInStore();
      return this.$store.dispatch("car/saveRequest");
    },

    updateRequesInformationInStore() {
      this.$store.dispatch("car/setName", this.name);
      this.$store.dispatch("car/setEmail", this.email);
      this.$store.dispatch("car/setPhone", this.phone);
      this.$store.dispatch("car/setNote", this.note);
      this.$store.dispatch("car/setInsuranceCompany", this.insuranceCompany);
      this.$store.dispatch("car/setInsuranceValue", this.insuranceValue);
    },

    alertSuccess() {
      this.isSuccess = true;
    },

    focusOnNameTextField() {
      const nameField = this.$refs.name as Vue;

      if (nameField) {
        (nameField.$el.querySelector("input") as HTMLElement).focus();
      }
    },

    onEscPress() {
      this.$emit("esc");
    }
  }
});
</script>
