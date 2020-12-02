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

        <form class="mt-4" @submit.prevent="submit" @keydown.esc="close">
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
              ></textarea>
            </div>
          </div>

          <div class="field mt-4">
            <div class="control">
              <button data-cy="popup-buy-button" class="button is-info">
                XÁC NHẬN
              </button>
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
      note: ""
    };
  },

  mounted() {
    this.focusOnEmailTextField();
  },

  methods: {
    submit() {
      console.log("submit");
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

<style>
</style>
