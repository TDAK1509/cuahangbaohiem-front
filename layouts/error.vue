<template>
  <section class="section">
    <div class="container">
      <h5 v-if="error.statusCode === 404" class="title is-size-4">
        Rất tiếc, chúng tôi không tìm thấy nội dung bạn yêu cầu.
      </h5>
      <h5 v-else class="title is-size-4">
        Đã có lỗi xảy ra (Mã {{ error.statusCode }})
      </h5>
      <nuxt-link to="/" class="button is-success">Trở về trang chủ</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ["error"],
  layout: "error"
};
</script>
