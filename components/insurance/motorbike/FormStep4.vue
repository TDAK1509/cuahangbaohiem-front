<template>
  <div>
    <h3>BƯỚC 4: TÓM TẮT ĐƠN HÀNG</h3>

    <form @submit.prevent="submit">
      <section>
        <h4>1. THÔNG TIN CHỦ XE</h4>
        <p>Tên chủ xe: {{ motorbikeOwner }}</p>
      </section>

      <section>
        <h4>2. THÔNG TIN VỀ XE THAM GIA BẢO HIỂM</h4>
        <p>Loại xe: {{ motorbikeType }}</p>
        <p>Biển số: {{ licensePlate }}</p>
        <p>Số khung: {{ frameNumber }}</p>
      </section>

      <section>
        <h4>3. THỜI HẠN BẢO HIỂM</h4>
        <p>Từ ngày {{ insuranceStartDate }} đến ngày {{ insuranceEndDate }}</p>
      </section>

      <section>
        <h4>4. MỨC TRÁCH NHIỆM VÀ PHÍ BẢO HIỂM</h4>
        <table>
          <tr>
            <td>{{ insuranceFee }}</td>
          </tr>
        </table>
      </section>

      <section>
        <h4>5. THÔNG TIN GIAO NHẬN GIẤY CHỨNG NHẬN BẢO HIỂM</h4>
        <p>Họ và tên người nhận: {{ buyerName }}</p>
        <p>
          Địa chỉ người nhận: {{ buyerAddress }}, {{ buyerWard }},
          {{ buyerDistrict }}, {{ buyerCity }}
        </p>
        <p>Số điện thoại liên hệ: {{ buyerPhone }}</p>
        <p>Địa chỉ email: {{ buyerEmail }}</p>
        <p>
          Hình thức giao nhận: Ngay sau khi Quý khách thanh toán phí bảo hiểm
          thành công, Bảo Việt sẽ gửi bản mềm Giấy chứng nhận bảo hiểm tới địa
          chỉ email Quý khách đăng ký.
        </p>
      </section>

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

  props: {
    motorbikeOwner: {
      type: String,
      default: ""
    },
    motorbikeType: {
      type: String,
      default: ""
    },
    licensePlate: {
      type: String,
      default: ""
    },
    frameNumber: {
      type: String,
      default: ""
    },
    insuranceStartDate: {
      type: String,
      default: ""
    },
    insuranceEndDate: {
      type: String,
      default: ""
    },
    insuranceFee: {
      type: String,
      default: ""
    },
    buyerName: {
      type: String,
      default: ""
    },
    buyerAddress: {
      type: String,
      default: ""
    },
    buyerCity: {
      type: String,
      default: ""
    },
    buyerDistrict: {
      type: String,
      default: ""
    },
    buyerWard: {
      type: String,
      default: ""
    },
    buyerPhone: {
      type: String,
      default: ""
    },
    buyerEmail: {
      type: String,
      default: ""
    }
  },

  methods: {
    submit() {
      this.$emit("submit");
    }
  }
};
</script>
