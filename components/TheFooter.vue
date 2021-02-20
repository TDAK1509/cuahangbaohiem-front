<template>
  <footer class="footer has-background-dark has-text-white">
    <div class="columns">
      <div class="column">
        <figure class="image">
          <img class="image footer__image" src="~assets/images/logo.png" />
        </figure>

        <ul class="footer__list is-size-7 ml-4 mt-4">
          <li class="mt-1">Công ty cổ phần Cửa Hàng Bảo Hiểm</li>
          <li class="mt-1">
            Số 69, đường Lê Lai, phường Lê Lợi,<br />Thành phố Hồ Chí Minh
          </li>

          <li class="mt-1">
            Hotline: <a class="footer__link" href="tel:12345">12345</a>
          </li>
          <li class="mt-1">
            Email:
            <a class="footer__link" href="mailto:info@cuahangbaohiem.com"
              >info@cuahangbaohiem.com</a
            >
          </li>
        </ul>
      </div>
      <div class="column">
        <h4 class="is-size-5">COLUMN 2</h4>
      </div>
      <div class="column">
        <h4 class="is-size-5">COLUMN 3</h4>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer__image {
  height: 40px;
  width: auto;
}

.footer__list {
  list-style-type: disc;
}

.footer__link {
  color: yellow;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
}
</style>
