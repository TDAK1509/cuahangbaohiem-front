<template>
  <div>
    <h3>BƯỚC 4: TÓM TẮT ĐƠN HÀNG</h3>

    <form @submit.prevent="submit">
      <h4>1. THÔNG TIN CHỦ XE</h4>
      <h4>2. THÔNG TIN VỀ XE THAM GIA BẢO HIỂM</h4>
      <h4>3. THỜI HẠN BẢO HIỂM</h4>
      <h4>4. MỨC TRÁCH NHIỆM VÀ PHÍ BẢO HIỂM</h4>
      <h4>5. THÔNG TIN GIAO NHẬN GIẤY CHỨNG NHẬN BẢO HIỂM</h4>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" data-cy="step-4-agree-checkbox" />
            Tôi/chúng tôi xác nhận rằng các thông tin nêu trên là đầy đủ và xác
            thực theo sự hiểu biết cao nhất của tôi/chúng tôi và đồng ý rằng các
            kê khai yêu cầu bảo hiểm là cơ sở của hợp đồng bảo hiểm và chấp nhận
            các điều kiện bảo hiểm quy định tại hợp đồng bảo hiểm.
          </label>
        </div>
      </div>

      <button data-cy="next-button">NEXT</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "MotorbikeFormStep4",

  inheritAttrs: false,

  methods: {
    submit() {
      this.$emit("submit");
    }
  }
};
</script>
