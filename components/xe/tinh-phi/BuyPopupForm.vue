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
        @keydown.esc="close"
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
import CarInsuranceRequestController from "@/controller/car-insurance-request";

const requestController = new CarInsuranceRequestController();

export default Vue.extend({
  name: "BuyPopupForm",

  data() {
    return {
      name: "",
      email: "",
      phone: "",
      note: "",
      loading: false,
      isSuccess: false
    };
  },

  mounted() {
    this.focusOnNameTextField();
  },

  methods: {
    async submit() {
      this.loading = true;

      try {
        await this.saveRequestToServer();
        this.clearForm();
        this.alertSuccess();
      } catch (error) {
        alert("Đã có lỗi xảy ra, vui lòng thử lại sau.");
      } finally {
        this.loading = false;
      }
    },

    saveRequestToServer() {
      requestController.setName(this.name);
      requestController.setEmail(this.email);
      requestController.setPhone(this.phone);
      requestController.setNote(this.note);
      return requestController.save();
    },

    clearForm() {
      this.name = "";
      this.email = "";
      this.phone = "";
      this.note = "";
    },

    alertSuccess() {
      this.isSuccess = true;
    },

    focusOnNameTextField() {
      const nameField = this.$refs.name as Vue;

      if (nameField) {
        (nameField.$el.querySelector("input") as HTMLElement).focus();
      }
    }
  }
});
</script>
