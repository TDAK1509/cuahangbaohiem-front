<template>
  <div class="modal" :class="{ 'is-active': show }">
    <div class="modal-background"></div>
    <div class="modal-card" data-cy="buy-popup">
      <header class="modal-card-head has-background-info">
        <p class="modal-card-title has-text-white" style="font-weight: 700">
          {{ title }}: {{ insuranceValue }}
        </p>
        <button class="delete" data-cy="popup-cancel-button" @click="close" />
      </header>

      <section class="modal-card-body">
        <p>
          Vui lòng điền thông tin liên lạc của bạn, chúng tôi sẽ liên lạc với
          bạn để tư vấn mua gói bảo hiểm bạn đã chọn.
        </p>

        <form
          ref="form"
          class="mt-4"
          netlify
          name="car_insurance"
          @submit.prevent="submit"
          @keydown.esc="close"
        >
          <TextField
            ref="email"
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
                v-if="!isSuccess"
                data-cy="popup-buy-button"
                class="button is-info"
                :class="{ 'is-loading': loading }"
              >
                XÁC NHẬN
              </button>

              <p v-else class="has-text-success">
                Cám ơn bạn đã lựa chọn dịch vụ của chúng tôi. Chúng tôi sẽ liên
                lạc với bạn trong thời gian sớm nhất!
              </p>
            </div>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuyPopup",

  model: {
    prop: "show",
    event: "input"
  },

  props: {
    show: {
      type: Boolean,
      default: false
    },

    title: {
      type: String,
      required: false,
      default: ""
    },

    insuranceValue: {
      type: String,
      required: false,
      default: ""
    }
  },

  data() {
    return {
      email: "",
      phone: "",
      note: "",
      loading: false,
      isSuccess: false
    };
  },

  mounted() {
    this.focusOnEmailTextField();
  },

  methods: {
    async submit() {
      this.loading = true;

      const myForm = this.$refs.form;
      const formData = new FormData(myForm);

      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
        });
        this.clearForm();
        this.alertSuccess();
      } catch (error) {
        alert("Đã có lỗi xảy ra, vui lòng thử lại sau.");
      } finally {
        this.loading = false;
      }
    },

    clearForm() {
      this.email = "";
      this.phone = "";
      this.note = "";
    },

    alertSuccess() {
      this.isSuccess = true;
    },

    close() {
      this.$emit("input", false);
    },

    focusOnEmailTextField() {
      this.$refs.email.$el.querySelector("input").focus();
    }
  }
};
</script>
