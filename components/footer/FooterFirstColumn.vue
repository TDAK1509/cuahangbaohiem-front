<template>
  <div class="column">
    <figure class="image is-hidden-mobile mb-4">
      <img
        class="image footer-first-column__image"
        src="~assets/images/logo.png"
      />
    </figure>

    <ul class="footer-first-column__list is-size-7 ml-4">
      <li class="mt-1">Công ty cổ phần Cửa Hàng Bảo Hiểm</li>
      <li class="mt-1">
        Số 69, đường Lê Lai, phường Lê Lợi,<br />Thành phố Hồ Chí Minh
      </li>

      <li class="mt-1">
        Hotline: <a class="footer-first-column__link" href="tel:12345">12345</a>
      </li>
      <li class="mt-1">
        Email:
        <a
          class="footer-first-column__link"
          href="mailto:info@cuahangbaohiem.com"
          >info@cuahangbaohiem.com</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterFirstColumn"
};
</script>

<style lang="scss" scoped>
.footer-first-column__image {
  height: 40px;
  width: auto;
}

.footer-first-column__list {
  list-style-type: disc;
}

.footer-first-column__link {
  color: yellow;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
}
</style>
